import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "@/component/Sidebar";


export const metadata = {
  title: "News Portal",
  description: "Latest updates and headlines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-white min-h-screen">
        
        <Navbar />
         <div className="max-w-1xl mx-auto flex">

          
          <Sidebar />

        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
     </div>
        <Footer />

      </body>
    </html>
  );
}
