"use client";

import { useState } from 'react';
import Button from './Button';

const expertiseItems = [
  {
    category: "WEB & DEVELOPMENT",
    title: "Custom Software Solutions",
    description: "We create bespoke software solutions tailored to your business needs, ensuring scalability, security, and optimal performance.",
    services: [
      "UI/UX Design & Prototyping",
      "E-commerce Solutions",
      "Native & Hybrid Apps",
      "ERP, CRM & CMS",
      "Custom APIs",
      "QA & Testing",
    ],
    imageSide: "left",
    imageUrl: "hero/web-dev.png"
  },
  {
    category: "ENTERPRISE SOLUTIONS",
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise solutions to streamline operations, improve efficiency, and drive business growth.",
    services: [
      "ERP Solutions",
      "CRM Solutions",
      "SCM Solutions",
      "HRMS Solutions",
      "BI & Analytics",
      "Data Warehousing",
    ],
    imageSide: "right",
    imageUrl: "hero/enter-sol.png"
  },
  {
    category: "DEFI & WEB3",
    title: "Blockchain Development",
    description: "Cutting-edge blockchain solutions including smart contracts, DeFi platforms, and Web3 applications.",
    services: [
      "Smart Contracts",
      "DeFi Solutions",
      "NFT & Tokens",
      "Web3 & DApps",
      "Wallets & Exchanges",
      "Auditing & Security",
    ],
    imageSide: "left",
    imageUrl: "hero/block-dev.png"
  },
  {
    category: "INTELLIGENT SOLUTIONS",
    title: "AI & ML Development",
    description: "Leverage the power of artificial intelligence and machine learning to transform your business processes.",
    services: [
      "AI/ML & NLP",
      "AI/ML & CV",
      "AI Model Training",
      "AI Chatbots",
      "Intelligent Automation",
      "Deploying ML Models to Production",
      "Post-Launch Support",
    ],
    imageSide: "right",
    imageUrl: "hero/ai-ml.png"
  },
];

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Expertise
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our strategic IT solutions and services designed to drive your business forward.
          </p>
        </div>

        {expertiseItems.map((item, index) => (
          <div 
            key={index} 
            className="mb-32 last:mb-0 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="text-center mb-12">
              <span 
                className="text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full inline-block transition-all duration-300 transform hover:scale-105"
                style={{ 
                  color: "#6B1C95",
                  backgroundColor: hoveredIndex === index ? "rgba(107, 28, 149, 0.1)" : "transparent",
                  border: "2px solid #6B1C95"
                }}
              >
                {item.category}
              </span>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-500 ${
                item.imageSide === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE LEFT OR RIGHT */}
              <div 
                className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
                  hoveredIndex === index ? "scale-105 shadow-3xl" : "scale-100"
                }`}
                style={{
                  background: hoveredIndex === index 
                    ? "linear-gradient(135deg, #6B1C95 0%, #5A1780 50%, #4A1266 100%)"
                    : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)"
                }}
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
                </div>
                
                {/* Image container */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`w-70 h-70 object-contain transition-all duration-500 ${
                      hoveredIndex === index ? "scale-110 brightness-110" : "scale-100"
                    }`}
                    style={{
                      filter: hoveredIndex === index ? "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" : "drop-shadow(0 10px 20px rgba(0,0,0,0.1))"
                    }}
                  />
                </div>

                {/* Floating badge */}
                <div 
                  className={`absolute top-6 right-6 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                    hoveredIndex === index ? "scale-110 rotate-12" : "scale-100 rotate-0"
                  }`}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)" }}
                >
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
              </div>

              {/* TEXT SIDE */}
              <div className={`transition-all duration-500 ${item.imageSide === "right" ? "md:order-first" : ""}`}>
                <h3 
                  className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-300 ${
                    hoveredIndex === index ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6B1C95] to-[#5A1780]" : ""
                  }`}
                  style={hoveredIndex !== index ? { color: "#000000" } : {}}
                >
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border border-gray-100 transition-all duration-300 hover:shadow-xl">
                  <ul className="space-y-4">
                    {item.services.map((service, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start group/item transition-all duration-300 transform hover:translate-x-2"
                        style={{ 
                          animationDelay: `${idx * 100}ms`,
                          opacity: hoveredIndex === index ? 1 : 0.9
                        }}
                      >
                        <div 
                          className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover/item:scale-110"
                          style={{ 
                            backgroundColor: hoveredIndex === index ? "#6B1C95" : "rgba(107, 28, 149, 0.1)",
                            color: hoveredIndex === index ? "white" : "#6B1C95"
                          }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105">
                  <Button variant="outline">More details</Button>
                </div>
              </div>
            </div>

            {/* Divider line between items */}
            {index < expertiseItems.length - 1 && (
              <div className="mt-20 flex justify-center">
                <div className="w-24 h-1 rounded-full" style={{ backgroundColor: "#6B1C95", opacity: 0.3 }}></div>
              </div>
            )}
          </div>
        ))}
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
