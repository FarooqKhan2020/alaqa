import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata = {
  title: "Hire Engineers - Alaqa",
  description: "Hire dedicated engineers and developers for your projects. React, Node.js, PHP, Java, and more.",
};

export default function HireEngineer() {
  const engineers = [
    {
      slug: "react-developer",
      title: "React Developer",
      description: "Expert React developers to build modern, scalable web applications.",
      icon: "⚛️",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: ["React", "Next.js", "TypeScript", "Redux", "React Hooks"]
    },
    {
      slug: "nodejs-developer",
      title: "Node.js Developer",
      description: "Skilled Node.js developers for backend development and API creation.",
      icon: "🟢",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      slug: "php-developer",
      title: "PHP Developer",
      description: "Experienced PHP developers specializing in Laravel and custom solutions.",
      icon: "🐘",
      experience: "3+ years",
      rate: "$25-45/hour",
      skills: ["PHP", "Laravel", "MySQL", "API Development", "CodeIgniter"]
    },
    {
      slug: "java-developer",
      title: "Java Developer",
      description: "Professional Java developers for enterprise-level applications.",
      icon: "☕",
      experience: "4+ years",
      rate: "$35-55/hour",
      skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "Maven"]
    },
    {
      slug: "dotnet-developer",
      title: ".NET Developer",
      description: "Expert .NET developers for building robust enterprise applications.",
      icon: "🔷",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: [".NET", "C#", "ASP.NET", "SQL Server", "Entity Framework"]
    },
    {
      slug: "full-stack-developer",
      title: "Full Stack Developer",
      description: "Versatile full-stack developers proficient in multiple technologies.",
      icon: "🚀",
      experience: "4+ years",
      rate: "$40-60/hour",
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      slug: "mobile-developer",
      title: "Mobile App Developer",
      description: "Mobile developers for iOS and Android app development.",
      icon: "📱",
      experience: "3+ years",
      rate: "$35-55/hour",
      skills: ["React Native", "Flutter", "iOS", "Android", "Swift"]
    },
    {
      slug: "python-developer",
      title: "Python Developer",
      description: "Python developers for web development, data science, and automation.",
      icon: "🐍",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: ["Python", "Django", "Flask", "Data Science", "Automation"]
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
                Hire Engineers
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hire Dedicated <span style={{ color: "#6B1C95" }}>Engineers</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Connect with skilled developers and engineers ready to join your team and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hire Engineers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "✅", title: "Vetted Professionals", description: "All engineers are thoroughly screened and tested" },
              { icon: "⏰", title: "Flexible Engagement", description: "Hire full-time, part-time, or on a project basis" },
              { icon: "💼", title: "Ready to Start", description: "Engineers available to start immediately" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineers Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Available Engineers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Choose Your Developer
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {engineers.map((engineer, index) => (
              <Link key={index} href={`/hire-engineer/${engineer.slug}`}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 cursor-pointer group">
                  <div className="text-5xl mb-4">{engineer.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6B1C95] transition-colors">
                    {engineer.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{engineer.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#6B1C95]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Experience: {engineer.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#6B1C95]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Rate: {engineer.rate}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {engineer.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-[#6B1C95] font-semibold group-hover:translate-x-2 transition-transform">
                    View Details
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Hiring Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Select Engineer", description: "Choose the engineer profile that matches your needs" },
              { step: "2", title: "Schedule Interview", description: "Interview the engineer to assess fit" },
              { step: "3", title: "Start Project", description: "Onboard and begin working together" },
              { step: "4", title: "Ongoing Support", description: "We provide continuous support throughout" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4" style={{ backgroundColor: "#6B1C95" }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Different Skill Set?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We have engineers across various technologies. Contact us to find the perfect match for your project.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

