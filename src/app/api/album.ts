const key = process.env.LASTFM_API_KEY;

export async function GET(artist: string, name: string) {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${key}&artist=${artist}&album=${name}&format=json`,
      { cache: "force-cache" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch album info: ${res.statusText}`);
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    throw new Error("Unexpected error from Last.fm API");
  }
}
