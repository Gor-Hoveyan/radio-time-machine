const key = process.env.LASTFM_API_KEY;

export async function GET(tag: string) {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${tag}&api_key=${key}&format=json`,
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch tag info: ${res.statusText}`);
    }
    const data = await res.json();

    return Response.json(data);
  } catch {
    throw new Error("Unexpected error from Last.fm API");
  }
}
