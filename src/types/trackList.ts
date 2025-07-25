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

type Track = {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
};

export type TrackList = Track[];
