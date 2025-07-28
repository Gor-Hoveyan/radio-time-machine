const key = process.env.YOUTUBE_API_KEY;

export async function GET(name: string) {
  console.log(key);
  if (!key) {
    return null; // Or throw an error
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(
        name
      )}&key=${key}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Unexpected error from YoutTube API");
    }

    const data = await res.json();
    return data.items?.[0]?.id?.videoId ?? null;
  } catch (e: any) {
    throw new Error(e.message || "Unexpected error from YoutTube API");
  }
}
