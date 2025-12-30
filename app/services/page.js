import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata = {
  title: "Services - Alaqa",
  description: "Comprehensive IT services including web development, mobile apps, blockchain, ERP, cloud solutions, and more.",
};

export default function Services() {
  const services = [
    {
      slug: "web-development",
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies.",
      icon: "🌐",
      features: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "API Integration"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      slug: "blockchain-development",
      title: "Blockchain Development",
      description: "Decentralized applications, smart contracts, and blockchain solutions.",
      icon: "⛓️",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Development", "Web3 Applications"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    },
    {
      slug: "erp-solutions",
      title: "ERP Solutions",
      description: "Enterprise resource planning systems to streamline business operations.",
      icon: "📊",
      features: ["Custom ERP Systems", "CRM Integration", "Business Intelligence", "Process Automation"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "☁️",
      features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps Services", "Cloud Security"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      slug: "ai-ml-solutions",
      title: "AI & ML Solutions",
      description: "Artificial intelligence and machine learning solutions for your business.",
      icon: "🤖",
      features: ["Machine Learning Models", "AI Chatbots", "Data Analytics", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business.",
      icon: "📈",
      features: ["SEO/SEM", "Social Media Marketing", "Content Marketing", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

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
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span style={{ color: "#6B1C95" }}>IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From web development to cloud solutions, we provide end-to-end IT services to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 cursor-pointer group">
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 text-5xl">{service.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6B1C95] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-[#6B1C95]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-[#6B1C95] font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We can create a tailored solution for your specific business needs. Let's discuss your requirements.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

