"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    YT: unknown;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeScriptLoader() {
  useEffect(() => {
    if (window.YT) return; // Already loaded

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.body.appendChild(tag);
  }, []);

  return null;
}
