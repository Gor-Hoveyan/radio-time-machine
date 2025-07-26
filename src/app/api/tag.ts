const key = process.env.LASTFM_API_KEY;

export async function GET(tag: string) {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${tag}&api_key=${key}&format=json`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  return Response.json(data);
}
