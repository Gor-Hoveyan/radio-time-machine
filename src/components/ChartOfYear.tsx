import { Track } from "@/types/trackList";
import Link from "next/link";

const formatDuration = (duration: string): string => {
  const seconds = parseInt(duration, 10);
  if (isNaN(seconds) || seconds === 0) return "--:--";
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

export default function ChartOfYear(props: { track: Track[] }) {
  const tracks = props.track;
  return (
    <ul className="space-y-4">
      {tracks.map((track) => (
        <li
          key={`${track["@attr"].rank}-${track.name}`}
          className="flex items-center justify-between bg-white rounded-xl shadow hover:shadow-lg transition p-4"
        >
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-gray-500 w-6 text-right">
              {track["@attr"].rank}
            </div>
            <div>
              <Link
                href={`/artist/${track.artist.name}/track/${track.name}`}
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {track.name}
              </Link>
              <div className="text-sm text-gray-600">
                by{" "}
                <a
                  href={track.artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {track.artist.name}
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {formatDuration(track.duration)}
          </div>
        </li>
      ))}
    </ul>
  );
}
