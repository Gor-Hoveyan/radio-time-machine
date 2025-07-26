import { GET } from "@/app/api/artist";
import { Artist } from "@/types/artist";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const artistName = (await params).artist;
  const fetchedData = (await GET(artistName)).json();
  const { artist }: { artist: Artist } = await fetchedData;
  const { name, url, image, stats, bio, tags, similar } = artist;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <Image
          src={image[0]["#text"]}
          width={500}
          height={500}
          alt={`${name} image`}
          className="w-32 h-32 object-cover rounded-full border"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold">{name}</h2>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            View on Last.fm
          </a>
          <div className="mt-2 text-gray-600 text-sm">
            <p>
              <strong>Listeners:</strong>{" "}
              {Number(stats.listeners).toLocaleString()}
            </p>
            <p>
              <strong>Playcount:</strong>{" "}
              {Number(stats.playcount).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-800 leading-relaxed">
        <h3 className="font-semibold text-lg mb-2">About</h3>
        <div dangerouslySetInnerHTML={{ __html: bio.summary }} />
      </div>

      {tags?.tag?.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-1">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.tag.map((tag) => (
              <Link
                href={`/tag/${tag.name}`}
                key={tag.name}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {similar?.artist?.length > 0 && (
        <div>
          <h3 className="font-semibold text-lg mb-1">Similar Artists</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {similar.artist.slice(0, 5).map((a) => (
              <li key={a.name}>
                <Link
                  href={`/artist/${a.name}`}
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
