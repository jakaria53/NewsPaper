export default function NewsCard({ title, image }: any) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="overflow-hidden">
        <img
          src={image}
          className="w-full h-44 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-100 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}
