import "./globals.css";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Sidebar from "@/component/Sidebar";
import BreakingNews from "@/component/BreakingNews";

export const metadata = {
  title: "Royal News",
  description: "Latest news and headlines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Full Width Breaking News */}
        <BreakingNews />

        {/* Main Website Layout */}
        <div className="max-w-7xl mx-auto flex gap-6">

          {/* Sidebar */}
          <Sidebar />

          {/* Page Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

        </div>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}