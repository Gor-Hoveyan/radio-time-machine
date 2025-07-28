const key = process.env.LASTFM_API_KEY;

export async function GET(artist: string, track: string) {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${key}&artist=${artist}&track=${track}&format=json`,
      { cache: "force-cache" }
    );
    console.log(res);
    if (!res.ok) {
      throw new Error(`Failed to fetch track info: ${res.statusText}`);
    }
    const data = await res.json();
    return Response.json(data);
  } catch {
    throw new Error("Unexpected error from Last.fm API");
  }
}
