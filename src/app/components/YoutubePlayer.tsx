"use client";
import { useEffect, useRef } from "react";

interface YouTubePlayerProps {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.YT) {
      window.onYouTubeIframeAPIReady = loadPlayer;
    } else {
      loadPlayer();
    }

    function loadPlayer() {
      new window.YT.Player(playerRef.current, {
        videoId,
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
      });
    }
  }, [videoId]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl mt-4"
      style={{ paddingTop: "56.25%" }}
    >
      <div ref={playerRef} className="absolute top-0 left-0  h-full"></div>
    </div>
  );
}
