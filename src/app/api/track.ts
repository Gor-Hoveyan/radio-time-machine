const key = process.env.LASTFM_API_KEY;

export async function GET(artist: string, track: string) {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${key}&artist=${artist}&track=${track}&format=json`
  );
  console.log(
    `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${key}&artist=${artist}&track=${track}&format=json`
  );
  const data = await res.json();
  return Response.json(data);
}
