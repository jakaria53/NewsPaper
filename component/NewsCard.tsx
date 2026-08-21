import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  id: number;
  title: string;
  image: string;
}

export default function NewsCard({
  id,
  title,
  image,
}: NewsCardProps) {
  return (
    <Link href={`/news/${id}`} className="block">
      <article className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">

        <div className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-44 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-5">

          <h3 className="font-semibold text-lg text-gray-100 leading-snug">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mt-3">
            Read full story →
          </p>

        </div>

      </article>
    </Link>
  );
}