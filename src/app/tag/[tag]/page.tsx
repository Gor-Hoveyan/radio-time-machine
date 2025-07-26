import { GET } from "@/app/api/tag";
import TagPage from "@/components/TagPage";

export default async function page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: tagName } = await params;
  const data = await GET(tagName);
  const { tag } = await data.json();

  return <TagPage {...tag} />;
}
