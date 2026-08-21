import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const categoryName = decodeURIComponent(category);

  const filteredNews = newsData.filter(
    (news) =>
      news.category.toLowerCase() ===
      categoryName.toLowerCase()
  );

  return (
    <main className="max-w-7xl mx-auto py-10">

      {/* Page Title */}

      <div className="mb-10">

        <p className="text-sm text-blue-600 font-semibold uppercase">
          Category
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 capitalize">
          {categoryName}
        </h1>

        <p className="text-gray-500 mt-2">
          Latest news from {categoryName}
        </p>

      </div>


      {/* No News */}

      {filteredNews.length === 0 ? (

        <div className="min-h-[40vh] flex flex-col items-center justify-center">

          <h2 className="text-3xl font-bold text-gray-900">
            No News Found
          </h2>

          <p className="text-gray-500 mt-2">
            There are no news articles in this category yet.
          </p>

          <Link
            href="/"
            className="mt-6 bg-gray-900 text-white px-5 py-3 rounded-lg"
          >
            ← Back Home
          </Link>

        </div>

      ) : (

        /* News Grid */

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
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                <div className="p-5">

                  <p className="text-blue-400 text-xs uppercase font-semibold">
                    {news.category}
                  </p>

                  <h2 className="text-xl text-white font-semibold mt-2 leading-snug">
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

      )}

    </main>
  );
}