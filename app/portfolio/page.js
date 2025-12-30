import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export const metadata = {
  title: "Portfolio - Alaqa",
  description: "Explore our portfolio of successful projects across web development, mobile apps, and enterprise solutions.",
};

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      client: "Retail Company",
      year: "2024"
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Complete healthcare management system for hospitals and clinics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
      technologies: [".NET", "SQL Server", "Azure"],
      client: "Healthcare Provider",
      year: "2024"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and user-friendly mobile banking application for iOS and Android.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      technologies: ["React Native", "Node.js", "Firebase"],
      client: "Financial Institution",
      year: "2023"
    },
    {
      title: "Blockchain Supply Chain",
      category: "Blockchain",
      description: "Transparent supply chain management system using blockchain technology.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      technologies: ["Ethereum", "Solidity", "Web3"],
      client: "Logistics Company",
      year: "2023"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & ML",
      description: "Intelligent analytics platform with machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      technologies: ["Python", "TensorFlow", "React"],
      client: "Tech Startup",
      year: "2024"
    },
    {
      title: "Cloud Migration Project",
      category: "Cloud Solutions",
      description: "Complete cloud migration and infrastructure modernization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      technologies: ["AWS", "Docker", "Kubernetes"],
      client: "Enterprise Client",
      year: "2023"
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Modern real estate platform with property listings and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      technologies: ["Next.js", "PostgreSQL", "Stripe"],
      client: "Real Estate Agency",
      year: "2024"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Comprehensive fitness and health tracking mobile application.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      technologies: ["Flutter", "Firebase", "HealthKit"],
      client: "Fitness Brand",
      year: "2023"
    },
    {
      title: "ERP System Implementation",
      category: "Enterprise Software",
      description: "Custom ERP system for manufacturing company.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Laravel", "MySQL", "Vue.js"],
      client: "Manufacturing Company",
      year: "2023"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Enterprise Software", "Blockchain", "AI & ML", "Cloud Solutions"];

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
                Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span style={{ color: "#6B1C95" }}>Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful projects that have transformed businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Countries Served" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#6B1C95" }}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
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

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 group cursor-pointer">
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 rounded text-xs bg-white/20 backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#6B1C95" }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <span className="text-sm text-gray-500">{project.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6B1C95] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full">View Case Study</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch with us today.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

