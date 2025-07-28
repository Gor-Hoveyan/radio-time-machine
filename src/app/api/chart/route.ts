import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const year = searchParams.get("year") || "2023";
    const limit = searchParams.get("limit") || "20";

    const key = process.env.LASTFM_API_KEY;
    if (!key) {
      return new Response("Missing API key", { status: 500 });
    }

    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${year}&page=${page}&limit=${limit}&api_key=${key}&format=json`,
      { cache: "force-cache" }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch chart: ${res.statusText}`);
    }

    const data = await res.json();

    return Response.json(data);
  } catch {
    throw new Error("Unexpected error from Last.fm API");
  }
}
