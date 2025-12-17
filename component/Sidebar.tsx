export default function Sidebar() {
  return (
    <aside
      className="
        w-64
        bg-gray-900 text-gray-200
        p-6 border-r border-gray-800
        shadow-md rounded-lg
        sticky top-28 self-start
        h-fit
         
      "
      >
        <br />
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 tracking-wide text-white">
        Categories
      </h2><br /><br />

      {/* Category List */}
      <ul className="space-y-2 text-base">
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          National
        </li>
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          Politics
        </li>
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          Business
        </li>
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          Sports
        </li>
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          Entertainment
        </li>
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          Tech
        </li>
        <li className="p-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
          Lifestyle
        </li>
        <br />
        <br />
      </ul>
    </aside>
  );
}
