const key = process.env.LASTFM_API_KEY;

export async function GET(name: string) {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${key}&format=json`,
      { cache: "force-cache" }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch artist info: ${res.statusText}`);
    }
    const data = await res.json();
    return Response.json(data);
  } catch {
    throw new Error("Unexpected error from Last.fm API");
  }
}
