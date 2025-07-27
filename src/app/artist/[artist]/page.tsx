import { GET } from "@/app/api/artist";
import ArtistPage from "@/pages/ArtistPage";
import { Artist } from "@/types/artist";

export default async function page({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const artistName = (await params).artist;
  const fetchedData = (await GET(artistName)).json();
  const { artist }: { artist: Artist } = await fetchedData;

  return <ArtistPage {...artist} />;
}
