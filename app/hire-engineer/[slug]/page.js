import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const engineer = getEngineerBySlug(slug);
  if (!engineer) {
    return {
      title: "Engineer Not Found - Alaqa"
    };
  }
  return {
    title: `Hire ${engineer.title} - Alaqa`,
    description: engineer.description
  };
}

function getEngineerBySlug(slug) {
  const engineers = {
    "react-developer": {
      title: "React Developer",
      description: "Expert React developers to build modern, scalable web applications with cutting-edge technologies.",
      icon: "⚛️",
      image: "https://images.unsplash.com/photo-1633356122544-1341343c7944?w=800&q=80",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: ["React", "Next.js", "TypeScript", "Redux", "React Hooks", "Context API", "Jest", "Webpack"],
      responsibilities: [
        "Develop and maintain React applications",
        "Implement responsive UI components",
        "Optimize application performance",
        "Collaborate with backend developers",
        "Write clean, maintainable code"
      ],
      requirements: [
        "Strong proficiency in JavaScript and React",
        "Experience with state management libraries",
        "Knowledge of modern frontend build tools",
        "Understanding of RESTful APIs",
        "Familiarity with Git version control"
      ]
    },
    "nodejs-developer": {
      title: "Node.js Developer",
      description: "Skilled Node.js developers for backend development and API creation with scalable solutions.",
      icon: "🟢",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL", "Socket.io", "JWT", "Docker"],
      responsibilities: [
        "Design and develop RESTful APIs",
        "Build scalable backend services",
        "Implement database solutions",
        "Ensure application security",
        "Optimize server performance"
      ],
      requirements: [
        "Proficient in Node.js and Express",
        "Experience with databases (MongoDB, PostgreSQL)",
        "Knowledge of API design principles",
        "Understanding of authentication mechanisms",
        "Familiarity with cloud platforms"
      ]
    },
    "php-developer": {
      title: "PHP Developer",
      description: "Experienced PHP developers specializing in Laravel and custom web solutions.",
      icon: "🐘",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      experience: "3+ years",
      rate: "$25-45/hour",
      skills: ["PHP", "Laravel", "MySQL", "API Development", "CodeIgniter", "Composer", "Eloquent ORM"],
      responsibilities: [
        "Develop PHP-based web applications",
        "Work with Laravel framework",
        "Create and maintain databases",
        "Build RESTful APIs",
        "Implement security best practices"
      ],
      requirements: [
        "Strong PHP programming skills",
        "Experience with Laravel framework",
        "Knowledge of MySQL database",
        "Understanding of MVC architecture",
        "Familiarity with Git"
      ]
    },
    "java-developer": {
      title: "Java Developer",
      description: "Professional Java developers for enterprise-level applications and microservices.",
      icon: "☕",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      experience: "4+ years",
      rate: "$35-55/hour",
      skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "Maven", "JUnit", "Docker"],
      responsibilities: [
        "Develop Java enterprise applications",
        "Build microservices architecture",
        "Implement Spring Boot applications",
        "Design database schemas",
        "Write unit and integration tests"
      ],
      requirements: [
        "Strong Java programming skills",
        "Experience with Spring Framework",
        "Knowledge of design patterns",
        "Understanding of microservices",
        "Familiarity with build tools (Maven/Gradle)"
      ]
    },
    "dotnet-developer": {
      title: ".NET Developer",
      description: "Expert .NET developers for building robust enterprise applications.",
      icon: "🔷",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: [".NET", "C#", "ASP.NET", "SQL Server", "Entity Framework", "Azure", "Web API"],
      responsibilities: [
        "Develop .NET applications",
        "Build ASP.NET web applications",
        "Work with SQL Server databases",
        "Implement RESTful services",
        "Deploy applications to cloud"
      ],
      requirements: [
        "Proficient in C# and .NET",
        "Experience with ASP.NET Core",
        "Knowledge of SQL Server",
        "Understanding of Entity Framework",
        "Familiarity with Azure cloud"
      ]
    },
    "full-stack-developer": {
      title: "Full Stack Developer",
      description: "Versatile full-stack developers proficient in multiple technologies.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      experience: "4+ years",
      rate: "$40-60/hour",
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker", "TypeScript"],
      responsibilities: [
        "Develop full-stack applications",
        "Work on both frontend and backend",
        "Design system architecture",
        "Implement DevOps practices",
        "Lead technical decisions"
      ],
      requirements: [
        "Strong frontend and backend skills",
        "Experience with multiple frameworks",
        "Knowledge of cloud platforms",
        "Understanding of DevOps",
        "Ability to work independently"
      ]
    },
    "mobile-developer": {
      title: "Mobile App Developer",
      description: "Mobile developers for iOS and Android app development with cross-platform expertise.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      experience: "3+ years",
      rate: "$35-55/hour",
      skills: ["React Native", "Flutter", "iOS", "Android", "Swift", "Kotlin", "Firebase"],
      responsibilities: [
        "Develop mobile applications",
        "Build cross-platform apps",
        "Implement native features",
        "Optimize app performance",
        "Publish apps to stores"
      ],
      requirements: [
        "Experience with React Native or Flutter",
        "Knowledge of iOS/Android development",
        "Understanding of mobile UI/UX",
        "Familiarity with app store processes",
        "Experience with mobile testing"
      ]
    },
    "python-developer": {
      title: "Python Developer",
      description: "Python developers for web development, data science, and automation solutions.",
      icon: "🐍",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4ec18b5?w=800&q=80",
      experience: "3+ years",
      rate: "$30-50/hour",
      skills: ["Python", "Django", "Flask", "Data Science", "Automation", "Pandas", "NumPy"],
      responsibilities: [
        "Develop Python applications",
        "Build web applications with Django/Flask",
        "Create data analysis scripts",
        "Automate business processes",
        "Implement machine learning models"
      ],
      requirements: [
        "Strong Python programming skills",
        "Experience with web frameworks",
        "Knowledge of data science libraries",
        "Understanding of databases",
        "Familiarity with testing frameworks"
      ]
    }
  };

  return engineers[slug] || null;
}

export default async function EngineerDetail({ params }) {
  const { slug } = await params;
  const engineer = getEngineerBySlug(slug);

  if (!engineer) {
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
                Hire {engineer.title}
              </span>
            </div>
            <div className="text-6xl mb-6">{engineer.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {engineer.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {engineer.description}
            </p>
          </div>
        </div>
      </section>

      {/* Engineer Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={engineer.image}
                alt={engineer.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Skills & Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#6B1C95]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Experience:</strong> {engineer.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#6B1C95]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Rate:</strong> {engineer.rate}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {engineer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: "#6B1C95" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Responsibilities & Requirements */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsibilities</h2>
                <ul className="space-y-3">
                  {engineer.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#6B1C95" }}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {engineer.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#6B1C95" }}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Hire a {engineer.title}?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect engineer for your team.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Schedule an Interview
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

