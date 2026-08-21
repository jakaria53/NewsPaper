"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const filteredNews = newsData.filter((news) => {
    const query = search.toLowerCase();

    return (
      news.title.toLowerCase().includes(query) ||
      news.excerpt.toLowerCase().includes(query) ||
      news.category.toLowerCase().includes(query)
    );
  });

  return (
    <main className="max-w-7xl mx-auto py-10 px-4">

      {/* Header */}

      <div className="mb-8">

        <p className="text-blue-600 font-semibold text-sm uppercase">
          Royal News
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Search News
        </h1>

      </div>


      {/* Search Box */}

      <div className="max-w-2xl mb-10">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search news..."
          className="
            w-full
            px-5
            py-4
            rounded-xl
            border
            border-gray-300
            text-gray-900
            outline-none
            focus:ring-2
            focus:ring-blue-500
            shadow-sm
          "
        />

      </div>


      {/* Result Count */}

      <div className="mb-6">

        {search && (
          <p className="text-gray-500">
            {filteredNews.length} result
            {filteredNews.length !== 1 ? "s" : ""} found
            for <strong>"{search}"</strong>
          </p>
        )}

      </div>


      {/* Results */}

      {filteredNews.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredNews.map((news) => (

            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className="group"
            >

              <article className="bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-xl transition">

                <div className="overflow-hidden">

                  <Image
                    src={news.image}
                    alt={news.title}
                    width={500}
                    height={300}
                    className="
                      w-full
                      h-52
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                </div>

                <div className="p-5">

                  <p className="text-blue-400 text-xs uppercase font-semibold">
                    {news.category}
                  </p>

                  <h2 className="text-xl text-white font-semibold mt-2">
                    {news.title}
                  </h2>

                  <p className="text-gray-400 text-sm mt-3">
                    {news.excerpt}
                  </p>

                  <p className="text-gray-300 text-sm mt-4">
                    Read full story →
                  </p>

                </div>

              </article>

            </Link>

          ))}

        </div>

      ) : (

        <div className="text-center py-20">

          <h2 className="text-3xl font-bold text-gray-900">
            No News Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>

        </div>

      )}

    </main>
  );
}