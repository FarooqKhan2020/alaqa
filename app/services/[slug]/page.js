import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found - Alaqa"
    };
  }
  return {
    title: `${service.title} - Alaqa`,
    description: service.description
  };
}

function getServiceBySlug(slug) {
  const services = {
    "web-development": {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies to drive your business forward.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration",
        "Progressive Web Apps",
        "Responsive Design"
      ],
      benefits: [
        "Scalable and maintainable code",
        "Modern tech stack",
        "SEO optimized",
        "Fast loading times",
        "Cross-browser compatibility"
      ],
      technologies: ["React", "Next.js", "Node.js", "PHP", "Laravel", "Python", "Django"]
    },
    "mobile-app-development": {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      features: [
        "iOS Development",
        "Android Development",
        "React Native Apps",
        "Flutter Applications",
        "App Store Optimization",
        "Push Notifications"
      ],
      benefits: [
        "Native performance",
        "Cross-platform compatibility",
        "App store deployment",
        "Regular updates & maintenance",
        "User-friendly interfaces"
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin"]
    },
    "blockchain-development": {
      title: "Blockchain Development",
      description: "Decentralized applications, smart contracts, and blockchain solutions for the future of digital transactions.",
      icon: "⛓️",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "NFT Development",
        "Web3 Applications",
        "Token Development",
        "Blockchain Consulting"
      ],
      benefits: [
        "Secure transactions",
        "Transparent operations",
        "Decentralized architecture",
        "Immutable records",
        "Cost-effective solutions"
      ],
      technologies: ["Solidity", "Ethereum", "Polygon", "Binance Smart Chain", "Web3.js"]
    },
    "erp-solutions": {
      title: "ERP Solutions",
      description: "Enterprise resource planning systems to streamline business operations and improve efficiency.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: [
        "Custom ERP Systems",
        "CRM Integration",
        "Business Intelligence",
        "Process Automation",
        "Inventory Management",
        "Financial Management"
      ],
      benefits: [
        "Improved efficiency",
        "Better decision making",
        "Cost reduction",
        "Data centralization",
        "Real-time insights"
      ],
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom Solutions"]
    },
    "luxury-leasing-solutions": {
      title: "Luxury Leasing Solutions",
      description: "We are a leading venture capital firm committed to supporting visionary entrepreneurs and fueling the growth.",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: [
        "Luxury Leasing Solutions",
        "Luxury Leasing Solutions",
        "Luxury Leasing Solutions",
        "Luxury Leasing Solutions",
        "Luxury Leasing Solutions",
      ],
      benefits: [
        "Improved efficiency",
        "Better decision making",
        "Cost reduction",
        "Data centralization",
        "Real-time insights"
      ],
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom Solutions"]
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your IT infrastructure.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      features: [
        "Cloud Migration",
        "AWS Services",
        "Azure Solutions",
        "GCP Implementation",
        "DevOps Services",
        "Cloud Security"
      ],
      benefits: [
        "Scalability",
        "Cost efficiency",
        "High availability",
        "Disaster recovery",
        "24/7 monitoring"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    "ai-ml-solutions": {
      title: "AI & ML Solutions",
      description: "Artificial intelligence and machine learning solutions to transform your business processes.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      features: [
        "Machine Learning Models",
        "AI Chatbots",
        "Data Analytics",
        "Predictive Analytics",
        "Computer Vision",
        "Natural Language Processing"
      ],
      benefits: [
        "Automated processes",
        "Data-driven insights",
        "Improved accuracy",
        "Cost savings",
        "Enhanced customer experience"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "MLOps"]
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs that enhance user experience and drive engagement.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
        "Brand Identity"
      ],
      benefits: [
        "Improved user satisfaction",
        "Higher conversion rates",
        "Better accessibility",
        "Consistent branding",
        "Mobile-first design"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Prototyping Tools"]
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business and reach your target audience.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      features: [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics & Reporting",
        "Email Marketing",
        "PPC Advertising"
      ],
      benefits: [
        "Increased visibility",
        "Higher ROI",
        "Brand awareness",
        "Lead generation",
        "Data-driven strategies"
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Social Platforms"]
    }
  };

  return services[slug] || null;
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

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
                {service.title}
              </span>
            </div>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#6B1C95" }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#6B1C95" }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border-2 font-semibold text-gray-700 hover:text-white hover:bg-[#6B1C95] hover:border-[#6B1C95] transition-all duration-300"
                style={{ borderColor: "#6B1C95", backgroundColor: "" }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title} services can help transform your business.
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

