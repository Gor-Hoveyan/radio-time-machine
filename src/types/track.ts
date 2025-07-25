type Image = {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
};

type Tag = {
  name: string;
  url: string;
};

type attr = {
  position: string;
};

export type Track = {
  name: string;
  mbid: string;
  url: string;
  duration: string;
  streamable: { "#text": string; fulltrack: string };
  listeners: string;
  playcount: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  album: {
    artist: string;
    title: string;
    mbid: string;
    url: string;
    image: Image[];
    "@attr": attr;
  };
  toptags: { tag: Tag[] };
  wiki: {
    published: string;
    summary: string;
  };
};
