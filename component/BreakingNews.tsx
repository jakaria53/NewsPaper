import Link from "next/link";
import { newsData } from "@/data/news";

export default function BreakingNews() {
  const breakingNews = newsData.filter(
    (news) => news.breaking
  );

  if (breakingNews.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-gray-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto flex items-center">

        {/* Label */}

        <div className="shrink-0 bg-red-600 px-5 py-3 font-bold text-sm">
          BREAKING
        </div>


        {/* News */}

        <div className="overflow-hidden flex-1">

          <div className="flex gap-10 px-20 py-3">

            {breakingNews.map((news) => (

              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="whitespace-nowrap hover:text-red-400 animate-bounce-right"
              >
                {news.title}
              </Link>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}