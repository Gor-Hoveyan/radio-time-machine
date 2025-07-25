import { GET } from "@/app/api/top";
import { TrackList } from "@/types/trackList";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const year = (await params).year;
  const fetchedData = (await GET(1, 20, Number(year))).json();
  const data = await fetchedData;
  const tracks: TrackList = data.tracks.track;
  console.log(tracks[0]);
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bolder my-10">
        Top songs of {year}
      </h1>
      <div className="w-fit mx-auto">
        {tracks.map((elem, id: number) => (
          <p key={elem.name}>
            {id + 1}.{" "}
            <Link href={`/artist/${elem.artist.name}`}>{elem.artist.name}</Link>{" "}
            -{" "}
            <Link href={`/artist/${elem.artist.name}/${elem.name}`}>
              {elem.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
