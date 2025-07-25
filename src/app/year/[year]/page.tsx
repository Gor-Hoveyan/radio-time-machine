import { GET } from "@/app/api/top";
import { Track } from "@/types/track";

export default async function page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const year = (await params).year;
  const fetchedData = (await GET(1, 20, Number(year))).json();
  const data = await fetchedData;
  console.log(data.tracks.track[0].image);

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bolder my-10">
        Top songs of {year}
      </h1>
      <div className="w-fit mx-auto">
        {data.tracks.track.map((elem: Track, id: number) => (
          <p key={elem.mbid}>
            {id + 1}. {elem.artist.name} - {elem.name}
          </p>
        ))}
      </div>
    </div>
  );
}
