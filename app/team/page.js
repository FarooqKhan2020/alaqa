import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Our Team - Alaqa",
  description: "Meet the talented team behind Alaqa, driving innovation in IT services.",
};

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Visionary leader with 15+ years of experience in technology and business strategy."
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Expert in cloud architecture and scalable system design."
    },
    {
      name: "Mike Johnson",
      role: "Sr. Manager Coordination",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Ensures seamless project delivery and client satisfaction."
    },
    {
      name: "Sarah Williams",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "Full-stack developer passionate about clean code and best practices."
    },
    {
      name: "David Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      bio: "Creative designer transforming ideas into beautiful user experiences."
    },
    {
      name: "Emily Rodriguez",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      bio: "Infrastructure expert ensuring reliable and scalable deployments."
    },
    {
      name: "Robert Taylor",
      role: "Senior Backend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Specializes in building robust and efficient backend systems."
    },
    {
      name: "Lisa Anderson",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      bio: "Crafts intuitive and responsive user interfaces."
    }
  ];

  const departments = [
    { name: "Development", count: 25, color: "#6B1C95" },
    { name: "Design", count: 8, color: "#4A90E2" },
    { name: "QA & Testing", count: 6, color: "#50C878" },
    { name: "DevOps", count: 5, color: "#FF6B35" },
    { name: "Management", count: 4, color: "#9B59B6" },
    { name: "Support", count: 7, color: "#F39C12" }
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
                Our Team
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span style={{ color: "#6B1C95" }}>Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A diverse group of talented professionals dedicated to delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold mb-2" style={{ color: dept.color }}>{dept.count}</div>
                <div className="text-sm font-semibold text-gray-700">{dept.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Leadership & Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Team
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#6B1C95" }}>{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-[#6B1C95] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#6B1C95] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#6B1C95] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Our Culture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What We Value
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Innovation", description: "We encourage creative thinking and embrace new technologies." },
              { title: "Collaboration", description: "Teamwork and open communication drive our success." },
              { title: "Excellence", description: "We strive for excellence in everything we do." }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

