import Link from "next/link";

const categories = [
  "National",
  "Politics",
  "Business",
  "Sports",
  "Entertainment",
  "Technology",
  "Lifestyle",
];

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:block
        w-64
        bg-gray-900
        text-gray-200
        p-6
        border-r
        border-gray-800
        shadow-md
        rounded-lg
        sticky
        top-28
        self-start
        h-fit
      "
    >

      <h2 className="text-2xl font-semibold mb-6 text-white">
        Categories
      </h2>

      <ul className="space-y-2">

        {categories.map((category) => (

          <li key={category}>

            <Link
              href={`/category/${category.toLowerCase()}`}
              className="block p-2 rounded-md hover:bg-gray-800 transition"
            >
              {category}
            </Link>

          </li>

        ))}

      </ul>

    </aside>
  );
}