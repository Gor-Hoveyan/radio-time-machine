import { Tag } from "@/types/tag";

export default function TagPage(tag: Tag) {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {tag.name}
        </h1>
        <p className="text-sm text-gray-500">Genre overview and statistics</p>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">
          🎧 {Number(tag.total).toLocaleString()} total plays
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">
          🌍 {Number(tag.reach).toLocaleString()} listener reach
        </div>
      </div>

      {tag.wiki?.summary && (
        <div className="border-t pt-4 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            About Jazz
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: tag.wiki.summary }}
            className="prose prose-sm max-w-none"
          />
        </div>
      )}
    </div>
  );
}
