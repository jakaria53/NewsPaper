import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { newsData } from "@/data/news";

export default function TrendingNews() {

  const trendingNews = newsData.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-4">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
          <TrendingUp size={20} />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Trending News
          </h2>

          <p className="text-sm text-gray-500">
            Most read stories right now
          </p>

        </div>

      </div>


      {/* Trending List */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {trendingNews.map((news, index) => (

          <Link
            key={news.id}
            href={`/news/${news.id}`}
            className="group"
          >

            <article className="flex gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition">

              {/* Number */}

              <div className="text-3xl font-bold text-gray-300 w-8 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Content */}

              <div>

                <p className="text-xs uppercase text-blue-600 font-semibold">
                  {news.category}
                </p>

                <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-blue-600 transition">
                  {news.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {news.date}
                </p>

              </div>

            </article>

          </Link>

        ))}

      </div>

    </section>
  );
}