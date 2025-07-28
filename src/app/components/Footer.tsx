import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-12 border-t relative bottom-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Music Chart. All rights reserved.
        </p>

        <div className="mt-2 sm:mt-0 space-x-4">
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
