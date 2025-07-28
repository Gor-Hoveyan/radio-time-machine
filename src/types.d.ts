// global.d.ts or types.d.ts

export {}; // This makes the file a module and avoids global scope leakage

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }

  // Declare global YT namespace from YouTube IFrame API
  namespace YT {
    class Player {
      constructor(elementId: HTMLDivElement | null, options: PlayerOptions);
    }

    interface PlayerOptions {
      videoId: string;
      width?: string;
      height?: string;
      playerVars?: Record<string, unknown>;
      events?: Record<string, () => void>;
    }
  }
}
