"use client";

import Image from "next/image";

export default function HeroNews({
  title,
  excerpt,
  image,
}: {
  title: string;
  excerpt: string;
  image: string;
}) {
  return (
    <div className="relative w-full h-[420px] rounded-xl overflow-hidden group shadow-xl">

      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />

      {/* Deep Professional Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-8">
        <h2 className="text-4xl font-extrabold text-white leading-tight drop-shadow-xl">
          {title}
        </h2>

        <p className="text-gray-200 text-base mt-3 w-4/5 drop-shadow">
          {excerpt}
        </p>
      </div>
    </div>
  );
}
