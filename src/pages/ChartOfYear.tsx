"use client";
import LoadMoreButton from "@/app/components/LoadMoreButton";
import { TrackListElement } from "@/types/trackList";
import { useEffect, useState } from "react";
import TrackElement from "../app/components/TrackElement";

export default function ChartOfYear(props: { year: number }) {
  const [tracks, setTracks] = useState<TrackListElement[]>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    (async function fetchInitialTracks() {
      await getData();
    })();
  }, []);

  async function getData() {
    setPage(page + 1);
    const fetchedData = await fetch(
      `/api/chart?page=${page + 1}&year=${props.year}`
    );
    const data: { tracks: { track: TrackListElement[] } } =
      await fetchedData.json();
    if (tracks?.length) {
      setTracks([...tracks, ...data.tracks.track]);
    } else {
      setTracks(data.tracks.track);
    }
  }

  return (
    <ul className="space-y-3">
      {tracks
        ? tracks.map((track, id) => (
            <TrackElement
              track={track}
              id={id}
              key={`${id + 1}-${track.name}`}
            />
          ))
        : ""}
      <LoadMoreButton page={page} getData={getData} />
    </ul>
  );
}
