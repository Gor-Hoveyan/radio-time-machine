import { TrackListElement } from "@/types/trackList";
import { formatDuration } from "@/utils/formatDuration";
import Link from "next/link";

export default function TrackElement(props: {
  track: TrackListElement;
  id: number;
}) {
  const { track, id } = props;
  return (
    <li className="flex items-center justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 border border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold text-gray-400 w-6 text-right">
          {id + 1}
        </div>

        <div>
          <Link
            href={`/artist/${track.artist.name}/track/${track.name}`}
            className="text-base font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            {track.name}
          </Link>
          <div className="text-sm text-gray-500">
            by{" "}
            <Link
              href={`/artist/${track.artist.name}`}
              className="hover:underline text-gray-600"
            >
              {track.artist.name}
            </Link>
          </div>
        </div>
      </div>

      <div className="text-xs text-white bg-gray-800 px-2 py-1 rounded-md font-mono min-w-[48px] text-center">
        {formatDuration(track.duration)}
      </div>
    </li>
  );
}
