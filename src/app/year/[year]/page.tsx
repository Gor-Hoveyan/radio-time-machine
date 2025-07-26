import { GET } from "@/app/api/top";
import ChartOfYear from "@/components/ChartOfYear";
import { Track } from "@/types/trackList";

export default async function page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const year = (await params).year;
  const fetchedData = (await GET(1, 20, Number(year))).json();
  const data: { tracks: { track: Track[] } } = await fetchedData;
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">🎵 Top Tracks of {year}</h2>
      <ChartOfYear tracks={data.tracks.track} />
    </div>
  );
}
