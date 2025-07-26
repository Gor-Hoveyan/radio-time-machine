import { GET } from "@/app/api/album";
import { Album } from "@/types/album";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ artist: string; album: string }>;
}) {
  const { artist, album: albumName } = await params;
  const response = await GET(artist, albumName);
  const { album }: { album: Album } = await response.json();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
          <Image
            src={
              album.image.find((img) => img.size === "extralarge")?.["#text"] ||
              "/placeholder.png"
            }
            alt={album.name}
            width={300}
            height={300}
            className="rounded-lg shadow w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-2/3 p-6 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{album.name}</h1>
            <a
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View on Last.fm
            </a>
          </div>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Artist:</span> {album.artist}
            </p>
            <p>
              <span className="font-medium">Listeners:</span>{" "}
              {Number(album.listeners).toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Playcount:</span>{" "}
              {Number(album.playcount).toLocaleString()}
            </p>
          </div>

          {album.tags.tag.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {album.tags.tag.map((tag) => (
                  <Link
                    href={`/tag/${tag.name}`}
                    key={tag.name}
                    rel="noopener noreferrer"
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {album.tracks.track.length > 0 && (
        <div className="border-t px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Tracks</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            {album.tracks.track.map((track) => (
              <li
                key={track.name + track.artist.name}
                className="flex justify-between items-center"
              >
                <span>
                  <span className="font-medium">{track.name}</span>{" "}
                  <span className="text-gray-500">by {track.artist.name}</span>
                </span>
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-xs"
                >
                  Listen ↗
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
