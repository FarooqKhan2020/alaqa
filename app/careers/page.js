import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export const metadata = {
  title: "Careers - Alaqa",
  description: "Join Alaqa and build your career with a leading IT services company. Explore open positions and opportunities.",
};

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Development",
      location: "Remote / On-site",
      type: "Full-time",
      description: "We are looking for an experienced Full Stack Developer to join our dynamic team."
    },
    {
      title: "React.js Developer",
      department: "Development",
      location: "Remote / On-site",
      type: "Full-time",
      description: "Join our frontend team and work on cutting-edge React applications."
    },
    {
      title: "Node.js Backend Developer",
      department: "Development",
      location: "Remote / On-site",
      type: "Full-time",
      description: "Build scalable backend solutions using Node.js and modern technologies."
    },
    {
      title: "Mobile App Developer (React Native)",
      department: "Mobile Development",
      location: "Remote / On-site",
      type: "Full-time",
      description: "Develop cross-platform mobile applications using React Native."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / On-site",
      type: "Full-time",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / On-site",
      type: "Full-time",
      description: "Manage cloud infrastructure and CI/CD pipelines for our projects."
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Attractive compensation packages" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive health coverage" },
    { icon: "📚", title: "Learning & Development", description: "Continuous skill enhancement" },
    { icon: "🏖️", title: "Paid Time Off", description: "Work-life balance matters" },
    { icon: "💻", title: "Flexible Work", description: "Remote and hybrid options" },
    { icon: "🎉", title: "Team Events", description: "Regular team building activities" }
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
                Careers
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span style={{ color: "#6B1C95" }}>Growing Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Be part of an innovative team that's shaping the future of technology. Explore exciting career opportunities with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Why Work With Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Benefits & Perks
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Open Positions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Current Job Openings
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button variant="outline">Apply Now</Button>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See a Role That Fits?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Submit Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

