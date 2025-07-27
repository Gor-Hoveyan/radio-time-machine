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
    <ul className="space-y-3">
      {tracks.map((track) => (
        <li
          key={`${track["@attr"].rank}-${track.name}`}
          className="flex items-center justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 border border-gray-100"
        >
          {/* Left Side: Rank, Icon, Name */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-gray-400 w-6 text-right">
              {track["@attr"].rank}
            </div>

            {/* Track + Artist */}
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

          {/* Right Side: Duration */}
          <div className="text-xs text-white bg-gray-800 px-2 py-1 rounded-md font-mono min-w-[48px] text-center">
            {formatDuration(track.duration)}
          </div>
        </li>
      ))}
    </ul>
  );
}
