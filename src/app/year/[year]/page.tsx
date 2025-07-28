import ChartOfYear from "@/pages/ChartOfYear";

export default async function page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const year = (await params).year;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">🎵 Top Tracks of {year}</h2>
      <ChartOfYear year={Number(year)} />
    </div>
  );
}
