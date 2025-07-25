type Image = {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
};

type Tag = {
  name: string;
  url: string;
};

type Streamable = { fulltrack: string; "#text": string };

type Attr = { rank: number };

type Artist = {
  url: string;
  name: string;
  mbid: string;
};

type Track = {
  streamable: Streamable;
  duration: number;
  url: string;
  name: string;
  "@attr": Attr;
  artist: Artist;
};

export type Album = {
  artist: string;
  mbid: string;
  tags: { tag: Tag[] };
  name: string;
  image: Image[];
  tracks: {
    track: Track[];
  };
  listeners: string;
  playcount: string;
  url: string;
};
