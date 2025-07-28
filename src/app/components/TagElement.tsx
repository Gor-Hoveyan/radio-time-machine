import Link from "next/link";

export default function TagElement(props: { name: string }) {
  const { name } = props;
  return (
    <Link
      href={`/tag/${name}`}
      key={name}
      rel="noopener noreferrer"
      className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition"
    >
      #{name}
    </Link>
  );
}
