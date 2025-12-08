export default function Navbar() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


  <h1 className="text-6xl text-gray-700 font-bold tracking-wide w-2/3 text-right ">
    ℜ𝔬𝔶𝔞𝔩  𝔫𝔢𝔴𝔰
  </h1>


        {/* Right: Date + Weather */}
        <div className="flex items-center gap-3 text-gray-700 text-sm">
          <span>Sunday, December 7, 2025</span>
          <span className="text-xl">🌤️</span>
        </div>

      </div>

      {/* CATEGORY MENU */}
      <nav className="border-t">
        <ul className="max-w-7xl mx-auto px-4 py-3 flex justify-center gap-10 text-gray-700 font-medium text-sm">
          <li className="cursor-pointer hover:text-blue-500">News</li>
          <li className="cursor-pointer hover:text-blue-500">Opinion</li>
          <li className="cursor-pointer hover:text-blue-500">Slow Reads</li>
          <li className="cursor-pointer hover:text-blue-500">Sports</li>
          <li className="cursor-pointer hover:text-blue-500">Business</li>
          <li className="cursor-pointer hover:text-blue-500">Entertainment</li>
          <li className="cursor-pointer hover:text-blue-500">Tech & Startup</li>
          <li className="cursor-pointer hover:text-blue-500">More ▾</li>
        </ul>
      </nav>
    </header>
  );
}
