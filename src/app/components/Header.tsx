import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
          <Link href="/" className="hover:text-blue-500 font-medium">
            🎶 Music Chart
          </Link>
        </div>

        <nav className="space-x-6 hidden sm:flex text-sm text-gray-600">
          <a href="#" className="hover:text-blue-500 font-medium">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
