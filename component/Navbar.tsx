"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

const categories = [
  { name: "News", href: "/" },
  { name: "Politics", href: "/category/politics" },
  { name: "Sports", href: "/category/sports" },
  { name: "Business", href: "/category/business" },
  { name: "Entertainment", href: "/category/entertainment" },
  { name: "Tech & Startup", href: "/category/technology" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">

      {/* TOP BAR */}
      {/* grid layouts diye element guloke center-e fixed kora hoyeche */}
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-3 items-center">

        {/* Left Side: Desktop Date */}
        <div className="hidden md:flex items-center gap-3 text-gray-700 text-sm">
          <span>{today}</span>
          <span className="text-xl">🌤️</span>
        </div>

        {/* Center Side: Logo */}
        <div className="flex md:justify-center justify-start col-span-1">
          <Link href="/">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-700 font-bold tracking-wide text-center">
              ℜ𝔬𝔶𝔞𝔩 𝔫𝔢𝔴𝔰
            </h1>
          </Link>
        </div>

        {/* Right Side: Mobile Buttons / Desktop layout blank spacing auto control */}
        <div className="flex justify-end items-center gap-2 col-span-1 md:col-span-1">
          
          {/* Desktop e date thakar jonno search icon k left layout right layout-e balance korbe */}
          <Link
            href="/search"
            aria-label="Search"
            className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 transition"
          >
            <Search size={20} />
          </Link>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/search"
              aria-label="Search"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 transition"
            >
              <Search size={20} />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 transition"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

      </div>


      {/* DESKTOP NAVIGATION */}
      <nav className="hidden md:block border-t border-gray-100">
        <ul className="max-w-7xl mx-auto px-4 py-3 flex justify-center gap-8 lg:gap-10 text-gray-700 font-medium text-sm">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={category.href}
                className="hover:text-blue-500 transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden border-t bg-white">
          <ul className="px-4 py-4 space-y-1">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
              >
                <Search size={18} />
                Search News
              </Link>
            </li>
          </ul>
        </nav>
      )}

    </header>
  );
}
