import HeroNews from "@/component/HeroNews";
import NewsCard from "@/component/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-16">

      {/* 🔥 Hero Big Headline (Main Top Story) */}
      <HeroNews 
        title="রাষ্ট্রীয় মর্যাদায় খালেদা জিয়ার দাফন সম্পন্ন"
        excerpt="বাংলাদেশের সাবেক প্রধানমন্ত্রী ও বিএনপির চেয়ারপারসন খালেদা জিয়ার দাফন সম্পন্ন হয়েছে। তার জানাজায় অংশ নিয়েছেন অসংখ্য মানুষ। তার মৃত্যুতে তিনদিনের রাষ্ট্রীয় শোকের পাশাপাশি বুধবার পালিত হয় সাধারণ ছুটি। তাকে শেষ শ্রদ্ধা জানাতে ঢাকায় আসেন ভারত, ভুটানের পররাষ্ট্রমন্ত্রীসহ বিভিন্ন দেশের প্রতিনিধিরা।"
        image="/image.jpg"
      />

      {/* ========================= */}
      {/* 📰 Main News Section     */}
      {/* ========================= */}
      <section className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Latest News
          </h2>
          <span className="text-sm text-gray-500">Updated just now</span>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <NewsCard 
            title="Economy growth hits new high"
            image="/zia.webp"
          />

          <NewsCard 
            title="Sports: Big win last night"
            image="/news2.jpg"
          />

          <NewsCard 
            title="Technology: New app trend rising"
            image="/news3.jpg"
          />

          <NewsCard 
            title="Global markets react to policy changes"
            image="/news1.jpg"
          />

          <NewsCard 
            title="Entertainment industry sees major shift"
            image="/news2.jpg"
          />

          <NewsCard 
            title="New research reveals surprising results"
            image="/news3.jpg"
          />

        </div>
      </section>

      {/* ========================= */}
      {/* 🔻 Featured Category Row  */}
      {/* ========================= */}
     <section className="max-w-7xl mx-auto px-4 mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Top Stories
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Big Card */}
        <div className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transition-transform hover:scale-105">
          <img
            src="/news1.jpg"
            className="w-full h-80 object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-xl">
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
              Major Global Event Makes Headlines
            </h3>
            <p className="text-gray-200 mt-2 text-sm drop-shadow">
              Global audiences are following this major update closely.
            </p>
          </div>
        </div>

        {/* Right List */}
        <div className="space-y-6">
          {[
            {
              title: "New environmental rules announced globally",
              excerpt: "Authorities claim this will reduce emissions significantly."
            },
            {
              title: "Tech companies prepare for massive changes",
              excerpt: "Analysts predict a shift in the digital ecosystem."
            },
            {
              title: "Education reforms spark national debate",
              excerpt: "Students welcome new changes but experts remain divided."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.excerpt}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

    </main>
  );
}
