import { GET } from "@/app/api/video";
import TagElement from "@/app/components/TagElement";
import YouTubePlayer from "@/app/components/YoutubePlayer";
import YouTubeScriptLoader from "@/app/components/YoutubeScriptLoader";
import { Track } from "@/types/track";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function TrackPage(track: Track) {
  const videoId = await GET(`${track?.name} ${track?.artist?.name}`);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-8 p-6">
      <YouTubeScriptLoader />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="md:w-1/3 h-max bg-gray-100 flex items-center justify-center p-4">
          <Image
            src={
              track?.album?.image?.[3]?.["#text"] ||
              "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
            }
            alt={track?.album?.title || "Album cover"}
            width={300}
            height={300}
            className="rounded-lg shadow w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-full lg:w-2/3 space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">{track?.name}</h1>
            <a
              href={track?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View on Last.fm
            </a>

            <div className="text-gray-700 text-sm space-y-1">
              <p>
                <span className="font-medium">Artist: </span>
                <Link
                  href={`/artist/${track?.artist?.name}`}
                  className="text-blue-500 hover:underline"
                >
                  {track?.artist?.name}
                </Link>
              </p>
              {track?.album?.title && (
                <p>
                  <span className="font-medium">Album: </span>
                  <Link
                    href={`/artist/${track?.artist?.name}/album/${track?.album?.title}`}
                    className="text-blue-500 hover:underline"
                  >
                    {track?.album?.title}
                  </Link>
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 text-sm mt-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                👂 {Number(track?.listeners).toLocaleString()} listeners
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                ▶️ {Number(track?.playcount).toLocaleString()} plays
              </span>
              {track?.duration && (
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  ⏱️ {Math.floor(Number(track?.duration) / 60000)}:
                  {(
                    Math.floor((Number(track?.duration) % 60000) / 1000) || "00"
                  )
                    .toString()
                    .padStart(2, "0")}
                </span>
              )}
            </div>

            {track?.toptags?.tag?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {track?.toptags?.tag.map((tag) => (
                  <TagElement key={tag?.name} name={tag?.name} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {track?.wiki?.summary && (
        <div className="border-t pt-6 mt-6">
          <h2 className="text-lg font-semibold text-center mb-2">
            About this Song
          </h2>
          <p
            className="text-gray-700 text-sm leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: track?.wiki?.summary }}
          />
        </div>
      )}
      {videoId && <YouTubePlayer videoId={videoId} />}
    </div>
  );
}
