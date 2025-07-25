const key = process.env.LASTFM_API_KEY;

export async function GET(page: number, limit: number, year: number) {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${year}&page=${page}&limit=${limit}&api_key=${key}&format=json`,
    { cache: "force-cache" }
  );
  const data = await res.json();
  return Response.json(data);
}
