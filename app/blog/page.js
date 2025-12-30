import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export const metadata = {
  title: "Blog - Alaqa",
  description: "Read our latest articles on web development, mobile apps, blockchain, AI, and technology trends.",
};

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    },
    {
      title: "Mobile App Development Best Practices",
      excerpt: "Learn the essential best practices for building successful mobile applications.",
      author: "Jane Smith",
      date: "March 10, 2024",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      title: "Blockchain Technology: Beyond Cryptocurrency",
      excerpt: "Discover how blockchain is revolutionizing industries beyond digital currencies.",
      author: "Mike Johnson",
      date: "March 5, 2024",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    },
    {
      title: "AI and Machine Learning in Business",
      excerpt: "How artificial intelligence is transforming business operations and decision-making.",
      author: "Sarah Williams",
      date: "February 28, 2024",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    },
    {
      title: "Cloud Solutions for Modern Enterprises",
      excerpt: "Understanding the benefits and implementation strategies for cloud computing.",
      author: "David Chen",
      date: "February 20, 2024",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "UI/UX Design Principles for 2024",
      excerpt: "Essential design principles to create engaging and user-friendly interfaces.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Blockchain", "AI & ML", "Cloud Solutions", "Design"];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Blog
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest <span style={{ color: "#6B1C95" }}>Insights & News</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest trends, insights, and best practices in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? "text-white shadow-lg bg-[#6B1C95]" 
                    : "text-gray-700 hover:text-white hover:shadow-lg border-2 hover:bg-[#6B1C95] hover:border-[#6B1C95]"
                }`}
                style={index === 0 ? {} : { borderColor: "#6B1C95", backgroundColor: "transparent" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#6B1C95" }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#6B1C95] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest articles, insights, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#6B1C95]"
              />
              <Button variant="primary" className="text-lg px-8 py-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

