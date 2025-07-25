const key = process.env.LASTFM_API_KEY;

export async function GET(artist: string, name: string) {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${key}&artist=${artist}&album=${name}&format=json`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  return Response.json(data);
}
