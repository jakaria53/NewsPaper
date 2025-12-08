export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Daily News</h2>
          <p className="text-sm">
            Trusted news from around the world. Breaking stories, analysis and updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Politics</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Technology</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Daily News. All Rights Reserved.
      </div>
    </footer>
  );
}
