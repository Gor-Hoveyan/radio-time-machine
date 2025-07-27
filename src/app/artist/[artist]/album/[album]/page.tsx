import { GET } from "@/app/api/album";
import AlbumPage from "@/pages/AlbumPage";
import { Album } from "@/types/album";

export default async function Page({
  params,
}: {
  params: Promise<{ artist: string; album: string }>;
}) {
  const { artist, album: albumName } = await params;
  const response = await GET(artist, albumName);
  const { album }: { album: Album } = await response.json();

  return <AlbumPage {...album} />;
}
