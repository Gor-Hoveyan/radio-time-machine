type Streamable = { "#text": string; fulltrack: string };

type Artist = {
  name: string;
  mbid: string;
  url: string;
};

type Image = {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
};

export type Track = {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
  "@attr": { rank: number };
};
