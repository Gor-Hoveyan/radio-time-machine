import { GET } from "@/app/api/track";
import TrackPage from "@/pages/TrackPage";
import { Track } from "@/types/track";

export default async function Page({
  params,
}: {
  params: Promise<{ artist: string; track: string }>;
}) {
  const { artist, track: trackName } = await params;
  const response = await GET(artist, trackName);
  const { track }: { track: Track } = await response.json();

  return <TrackPage {...track} />;
}
