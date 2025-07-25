type Image = {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
};

type Tag = {
  name: string;
  url: string;
};

type Link = {
  "#text": string;
  rel: string;
  href: string;
};

type Bio = {
  links: { link: Link };
  published: string;
  summary: string;
  content: string;
};

type Similar = {
  name: string;
  url: string;
  image: Image[];
};

export type Artist = {
  name: string;
  mbid: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: { listeners: string; playcount: string };
  similar: { artist: Similar[] };
  tags: { tag: Tag[] };
  bio: Bio;
};
