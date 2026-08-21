import HeroNews from "@/component/HeroNews";
import BreakingNews from "@/component/BreakingNews";
import NewsCard from "@/component/NewsCard";
import TrendingNews from "@/component/TrendingNews";
import { newsData } from "@/data/news";
import Link from "next/link";

export default function Home() {

  // Hero news

  const heroNews =
    newsData.find((news) => news.featured) || newsData[0];


  // Featured news

  const featuredNews = newsData
    .filter(
      (news) =>
        news.featured &&
        news.id !== heroNews.id
    )
    .slice(0, 4);


  // Latest news

  const latestNews = newsData.slice(0, 6);


  // Top stories

  const topStories = newsData
    .filter(
      (news) =>
        news.featured &&
        news.id !== heroNews.id
    )
    .slice(0, 3);


  return (
    <>

      {/* ========================= */}
      {/* 🔴 Breaking News */}
      {/* ========================= */}

     


      <main className="space-y-12 sm:space-y-14 lg:space-y-16">


        {/* ========================= */}
        {/* 🔥 Hero News */}
        {/* ========================= */}

        <section className="max-w-7xl mx-auto px-4 pt-6">

          <HeroNews
            id={heroNews.id}
            title={heroNews.title}
            excerpt={heroNews.excerpt}
            image={heroNews.image}
            category={heroNews.category}
          />

        </section>


        {/* ========================= */}
        {/* 📈 Trending */}
        {/* ========================= */}

        <TrendingNews />


        {/* ========================= */}
        {/* 📰 Latest News */}
        {/* ========================= */}

        <section className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold text-gray-900">
              Latest News
            </h2>

            <Link
              href="/search"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View all →
            </Link>

          </div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >

            {latestNews.map((news) => (

              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                image={news.image}
              />

            ))}

          </div>

        </section>


        {/* ========================= */}
        {/* ⭐ Top Stories */}
        {/* ========================= */}

        <section className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Stories
          </h2>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


            {/* Left Big Story */}

            {topStories[0] && (

              <Link
                href={`/news/${topStories[0].id}`}
                className="group"
              >

                <article
                  className="
                    relative
                    overflow-hidden
                    rounded-xl
                    shadow-xl
                    h-80
                  "
                >

                  <img
                    src={topStories[0].image}
                    alt={topStories[0].title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />


                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/30
                      to-transparent
                    "
                  />


                  <div className="absolute bottom-0 left-0 p-6">

                    <p className="text-blue-300 text-sm font-semibold uppercase">
                      {topStories[0].category}
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-2">
                      {topStories[0].title}
                    </h3>

                    <p className="text-gray-200 mt-2 text-sm">
                      {topStories[0].excerpt}
                    </p>

                  </div>

                </article>

              </Link>

            )}


            {/* Right Stories */}

            <div className="space-y-5">

              {topStories.slice(1).map((news) => (

                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="block group"
                >

                  <article
                    className="
                      bg-white
                      rounded-xl
                      p-5
                      shadow
                      hover:shadow-lg
                      transition
                      border
                      border-gray-200
                    "
                  >

                    <p className="text-xs text-blue-600 font-semibold uppercase">
                      {news.category}
                    </p>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-gray-900
                        mt-1
                        group-hover:text-blue-600
                      "
                    >
                      {news.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      {news.excerpt}
                    </p>

                  </article>

                </Link>

              ))}

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* ⭐ Featured News */}
        {/* ========================= */}

        {featuredNews.length > 0 && (

          <section className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {featuredNews.map((news) => (

                <NewsCard
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  image={news.image}
                />

              ))}

            </div>

          </section>

        )}

      </main>

    </>
  );
}