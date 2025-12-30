import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export const metadata = {
  title: "Products - Alaqa",
  description: "Explore our innovative software products and solutions designed to transform your business.",
};

export default function Products() {
  const products = [
    {
      title: "Enterprise Management Suite",
      description: "Comprehensive business management solution integrating ERP, CRM, and HRMS in one platform.",
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: ["ERP Integration", "CRM System", "HRMS Module", "Analytics Dashboard"],
      status: "Available"
    },
    {
      title: "Cloud Collaboration Platform",
      description: "Secure cloud-based collaboration tool for teams to work together seamlessly.",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      features: ["Real-time Collaboration", "File Sharing", "Video Conferencing", "Task Management"],
      status: "Available"
    },
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with advanced features for online businesses.",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Inventory Management"],
      status: "Available"
    },
    {
      title: "AI-Powered Analytics Tool",
      description: "Intelligent analytics platform with machine learning capabilities for data insights.",
      category: "AI & Analytics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      features: ["Predictive Analytics", "Data Visualization", "Custom Reports", "Real-time Insights"],
      status: "Coming Soon"
    },
    {
      title: "Mobile App Builder",
      description: "No-code platform to build mobile applications without coding knowledge.",
      category: "Development Tools",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      features: ["Drag & Drop Builder", "Template Library", "App Publishing", "Analytics Integration"],
      status: "Beta"
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solution to protect your business from cyber threats.",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      features: ["Threat Detection", "Firewall Protection", "Data Encryption", "Security Monitoring"],
      status: "Available"
    }
  ];

  const categories = ["All", "Enterprise Software", "Cloud Solutions", "E-commerce", "AI & Analytics", "Development Tools", "Security"];

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
                Our Products
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative <span style={{ color: "#6B1C95" }}>Software Products</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our range of software products designed to solve real business challenges.
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
                style={index === 0 ? {} : { borderColor: "#6B1C95", backgroundColor: "" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      product.status === "Available" ? "bg-green-500" :
                      product.status === "Coming Soon" ? "bg-yellow-500" :
                      "bg-blue-500"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-[#6B1C95]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
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
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We can develop a custom product tailored to your specific business needs. Let's discuss your requirements.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Request Custom Product
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

