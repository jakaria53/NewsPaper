import Image from "next/image";
import Link from "next/link";

type HeroNewsProps = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
};

export default function HeroNews({
  id,
  title,
  excerpt,
  image,
  category,
}: HeroNewsProps) {

  return (
    <Link href={`/news/${id}`}>

      <article
        className="
          relative
          w-full
          h-[420px]
          rounded-xl
          overflow-hidden
          group
          shadow-xl
          cursor-pointer
        "
      >

        <Image
          src={image}
          alt={title}
          fill
          priority
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />


        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
          "
        />


        {/* Content */}

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-blue-300 text-sm font-semibold uppercase">
            {category}
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-white
              leading-tight
              mt-2
              drop-shadow-xl
            "
          >
            {title}
          </h2>

          <p
            className="
              text-gray-200
              text-base
              mt-3
              max-w-3xl
              line-clamp-3
            "
          >
            {excerpt}
          </p>

        </div>

      </article>

    </Link>
  );
}