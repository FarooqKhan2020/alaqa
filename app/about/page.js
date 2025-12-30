import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export const metadata = {
  title: "About Us - Alaqa",
  description: "Learn about Alaqa, a leading IT services company providing web development, mobile apps, blockchain, ERP, and cloud solutions.",
};

export default function AboutUs() {
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
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Tomorrow's <span style={{ color: "#6B1C95" }}>Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a leading IT services company dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#6B1C95" }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses worldwide with cutting-edge technology solutions that drive growth, innovation, and digital transformation. We strive to deliver excellence in every project, building long-term partnerships with our clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#6B1C95" }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in IT services, recognized for innovation, quality, and client success. We envision a future where technology seamlessly integrates with business needs, creating unprecedented value and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of highly skilled professionals with years of experience in cutting-edge technologies.",
                icon: "👥"
              },
              {
                title: "Quality Assurance",
                description: "We maintain the highest standards of quality in every project, ensuring flawless delivery.",
                icon: "✅"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support to ensure your business operations run smoothly without interruption.",
                icon: "🔄"
              },
              {
                title: "Innovation",
                description: "We stay ahead of the curve with the latest technologies and innovative solutions.",
                icon: "💡"
              },
              {
                title: "Client-Centric",
                description: "Your success is our priority. We tailor solutions to meet your specific business needs.",
                icon: "🎯"
              },
              {
                title: "Proven Track Record",
                description: "Years of successful project deliveries and satisfied clients across various industries.",
                icon: "📈"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: "#6B1C95" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Expert Team Members" },
              { number: "10+", label: "Years of Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

