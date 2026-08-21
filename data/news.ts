export interface News {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  featured?: boolean;
  breaking?: boolean;
}

export const newsData: News[] = [
  {
    id: 1,
    title: "রাষ্ট্রীয় মর্যাদায় খালেদা জিয়ার দাফন সম্পন্ন",
    category: "National",
    image: "/image.jpg",
    excerpt:
      "বাংলাদেশের সাবেক প্রধানমন্ত্রী ও বিএনপির চেয়ারপারসন খালেদা জিয়ার দাফন সম্পন্ন হয়েছে।",
    content:
      "বাংলাদেশের সাবেক প্রধানমন্ত্রী ও বিএনপির চেয়ারপারসন খালেদা জিয়ার দাফন সম্পন্ন হয়েছে। তার জানাজায় অংশ নিয়েছেন অসংখ্য মানুষ।",
    author: "Royal News Desk",
    date: "August 20, 2026",
    featured: true,
    breaking: true,
  },

  {
    id: 2,
    title: "Economy growth hits new high",
    category: "Business",
    image: "/zia.webp",
    excerpt:
      "The country's economy continues to show strong growth amid changing global conditions.",
    content:
      "Economic activity has continued to expand as businesses and investors respond to changing market conditions.",
    author: "Business Desk",
    date: "August 20, 2026",
    featured: true,
  },

  {
    id: 3,
    title: "Sports: Big win last night",
    category: "Sports",
    image: "/news2.jpg",
    excerpt:
      "A stunning performance helped the team secure a memorable victory.",
    content:
      "The team delivered an impressive performance last night and secured a major victory.",
    author: "Sports Desk",
    date: "August 20, 2026",
  },

  {
    id: 4,
    title: "Technology: New app trend rising",
    category: "Technology",
    image: "/news3.jpg",
    excerpt:
      "A new generation of applications is changing how people interact with technology.",
    content:
      "Technology companies are exploring new application trends as users demand faster and smarter digital experiences.",
    author: "Technology Desk",
    date: "August 20, 2026",
  },

  {
    id: 5,
    title: "Global markets react to policy changes",
    category: "Global",
    image: "/news1.jpg",
    excerpt:
      "Global markets responded quickly to the latest policy announcements.",
    content:
      "Financial markets around the world reacted to the latest policy changes announced by authorities.",
    author: "Global Desk",
    date: "August 20, 2026",
    featured: true,
  },

  {
    id: 6,
    title: "Entertainment industry sees major shift",
    category: "Entertainment",
    image: "/news2.jpg",
    excerpt:
      "The entertainment industry is experiencing major changes in audience behavior.",
    content:
      "Streaming platforms and changing audience preferences continue to reshape the entertainment industry.",
    author: "Entertainment Desk",
    date: "August 20, 2026",
  },

  {
    id: 7,
    title: "New research reveals surprising results",
    category: "Science",
    image: "/news3.jpg",
    excerpt:
      "Researchers have published new findings that could change current understanding.",
    content:
      "Researchers recently published findings that may influence future studies and discussions.",
    author: "Science Desk",
    date: "August 20, 2026",
  },

  {
    id: 8,
    title: "New environmental rules announced globally",
    category: "Environment",
    image: "/news1.jpg",
    excerpt:
      "Authorities say the new rules could significantly reduce emissions.",
    content:
      "New environmental policies are being introduced in several regions as governments focus on reducing emissions.",
    author: "Environment Desk",
    date: "August 20, 2026",
    featured: true,
  },

  {
    id: 9,
    title: "Tech companies prepare for massive changes",
    category: "Technology",
    image: "/news3.jpg",
    excerpt:
      "Analysts predict major changes across the digital ecosystem.",
    content:
      "Technology companies are preparing for major changes as artificial intelligence and new digital platforms continue to grow.",
    author: "Technology Desk",
    date: "August 20, 2026",
  },

  {
    id: 10,
    title: "Education reforms spark national debate",
    category: "Education",
    image: "/news2.jpg",
    excerpt:
      "Students welcome some of the proposed changes while experts remain divided.",
    content:
      "The latest education reforms have created significant discussion among students, teachers and policymakers.",
    author: "Education Desk",
    date: "August 20, 2026",
  },
];