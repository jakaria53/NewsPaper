import { newsData } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Dynamic SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const news = newsData.find(
    (item) => item.id.toString() === id
  );

  if (!news) {
    return {
      title: "News Not Found | Royal News",
    };
  }

  return {
    title: `${news.title} | Royal News`,
    description: news.excerpt,

    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
    },
  };
}

// Page
export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const news = newsData.find(
    (item) => item.id.toString() === id
  );

  if (!news) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto py-10">

      {/* Category */}
      <p className="text-blue-600 font-semibold uppercase text-sm">
        {news.category}
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
        {news.title}
      </h1>

      {/* Author */}
      <div className="flex gap-4 text-sm text-gray-500 mt-4">
        <span>By {news.author}</span>
        <span>•</span>
        <span>{news.date}</span>
      </div>

      {/* Image */}
      <div className="relative w-full h-[450px] mt-8 rounded-2xl overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Excerpt */}
      <p className="text-xl text-gray-700 mt-8">
        {news.excerpt}
      </p>

      {/* Content */}
      <div className="mt-8 text-lg text-gray-700 leading-8">
        <p>{news.content}</p>
      </div>

      {/* Back */}
      <Link
        href="/"
        className="inline-block mt-10 px-5 py-3 bg-gray-900 text-white rounded-lg"
      >
        ← Back to News
      </Link>

    </article>
  );
}