"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const message =
    (searchParams && searchParams.get("message")) || "Something went wrong.";

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 mb-6">{message}</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-500 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
