'use client';

import { useState } from 'react';

const technologies = {
  Frontend: [
    { name: "React", logo: "/tech/react.svg" },
    { name: "Angular", logo: "/tech/angular.svg" },
    { name: "Vue.js", logo: "/tech/vue.svg" },
    { name: "Next.js", logo: "/tech/nextjs.svg" },
    { name: "TypeScript", logo: "/tech/typescript.svg" },
    { name: "JavaScript", logo: "/tech/javascript.svg" },
  ],
  Backend: [
    { name: "Node.js", logo: "/tech/node.svg" },
    { name: "Python", logo: "/tech/python.svg" },
    { name: "Java", logo: "/tech/java.svg" },
    { name: ".NET", logo: "/tech/dotnet.svg" },
    { name: "PHP", logo: "/tech/php.svg" },
    { name: "Laravel", logo: "/tech/laravel.svg" },
  ],
  Mobile: [
    { name: "React Native", logo: "/tech/reactnative.svg" },
    { name: "Flutter", logo: "/tech/flutter.svg" },
    { name: "iOS", logo: "/tech/ios.svg" },
    { name: "Android", logo: "/tech/android.svg" },
    { name: "Kotlin", logo: "/tech/kotlin.svg" },
    { name: "Swift", logo: "/tech/swift.svg" },
  ],
  Database: [
    { name: "MySQL", logo: "/tech/mysql.svg" },
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/tech/mongodb.svg" },
    { name: "Redis", logo: "/tech/redis.svg" },
    { name: "Oracle", logo: "/tech/oracle.svg" },
    { name: "Firebase", logo: "/tech/firebase.svg" },
  ],
  Cloud: [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Azure", logo: "/tech/azure.svg" },
    { name: "GCP", logo: "/tech/gcp.svg" },
    { name: "Docker", logo: "/tech/docker.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
    { name: "DigitalOcean", logo: "/tech/digitalocean.svg" },
  ],
};

const categories = Object.keys(technologies);

export default function CoreTechnologies() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="pt-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#5E5CE6", color: "white" }}>
              Technologies
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            OUR CORE TECHNOLOGIES
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#5E5CE6" }}></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alaqa works across various modern technologies for effective, scalable and future-proof custom software development.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                activeCategory === category
                  ? "text-white shadow-xl scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
              style={
                activeCategory === category
                  ? {
                      background: "linear-gradient(135deg, #5E5CE6 0%, #4C4AD4 100%)",
                    }
                  : {}
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {technologies[activeCategory].map((tech, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className={`bg-white border-2 rounded-2xl p-6 transition-all duration-500 transform flex flex-col items-center justify-center aspect-square relative overflow-hidden ${
                  hoveredTech === index
                    ? "border-[#5E5CE6] shadow-2xl scale-110 -translate-y-2"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105"
                }`}
              >
                {/* Gradient overlay on hover */}
                {hoveredTech === index && (
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: "linear-gradient(135deg, #5E5CE6 0%, #4C4AD4 100%)",
                    }}
                  ></div>
                )}

                {/* Logo container */}
                <div
                  className={`relative z-10 mb-4 transition-all duration-500 ${
                    hoveredTech === index ? "scale-110" : "scale-100"
                  }`}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    style={{
                      filter: hoveredTech === index
                        ? "drop-shadow(0 10px 20px rgba(255, 74, 93, 0.3))"
                        : "none",
                    }}
                  />
                </div>

                {/* Tech name */}
                <div
                  className={`text-sm font-semibold text-center transition-colors duration-300 relative z-10 ${
                    hoveredTech === index ? "text-[#5E5CE6]" : "text-gray-700"
                  }`}
                >
                  {tech.name}
                </div>

                {/* Decorative corner accent */}
                {hoveredTech === index && (
                  <div
                    className="absolute top-2 right-2 w-3 h-3 rounded-full transition-all duration-300"
                    style={{ backgroundColor: "#5E5CE6" }}
                  ></div>
                )}
              </div>

              {/* Glow effect on hover */}
              {hoveredTech === index && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-xl -z-10 transition-opacity duration-500"
                  style={{ backgroundColor: "#5E5CE6" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        {/* <div className="text-center">
          <button
            className="group font-semibold flex items-center justify-center mx-auto px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              color: "#5E5CE6",
              border: "2px solid #5E5CE6",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5E5CE6";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#5E5CE6";
            }}
          >
            <span>See More</span>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
