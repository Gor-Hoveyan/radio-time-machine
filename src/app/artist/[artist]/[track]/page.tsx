import { GET } from "@/app/api/track";
import { Track } from "@/types/track";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ artist: string; track: string }>;
}) {
  const { artist, track: trackName } = await params;
  const response = await GET(artist, trackName);
  const { track }: { track: Track } = await response.json();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 flex items-center justify-center p-4 h-fit">
          <Image
            width={300}
            height={300}
            src={track.album?.image?.[3]?.["#text"] || "/fallback.jpg"}
            alt={track.album?.title || "Album cover"}
            className="w-full h-auto object-cover rounded-xl shadow"
          />
        </div>

        <div className="md:w-2/3 p-6 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{track.name}</h1>
            <a
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View on Last.fm
            </a>
          </div>

          <div className="space-y-1">
            <div>
              <span className="font-medium text-gray-700">Artist: </span>
              <Link
                href={`/artist/${track.artist.name}`}
                className="text-blue-500 hover:underline"
              >
                {track.artist.name}
              </Link>
            </div>
            {track.album && (
              <div>
                <span className="font-medium text-gray-700">Album: </span>
                <a
                  href={track.album.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  {track.album.title}
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              👂 {Number(track.listeners).toLocaleString()} listeners
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              ▶️ {Number(track.playcount).toLocaleString()} plays
            </div>
            {track.duration && (
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                ⏱️ {Math.floor(Number(track.duration) / 60000)}:
                {(Math.floor((Number(track.duration) % 60000) / 1000) || "00")
                  .toString()
                  .padStart(2, "0")}
              </div>
            )}
          </div>

          {track.toptags?.tag?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {track.toptags.tag.map((tag, index) => (
                  <a
                    key={index}
                    href={tag.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    #{tag.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {track.wiki?.summary && (
        <div className="border-t p-4 mt-4 w-11/12 mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            About this Song
          </h2>
          <p
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: track.wiki.summary }}
          />
        </div>
      )}
    </div>
  );
}
