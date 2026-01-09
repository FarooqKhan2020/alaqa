"use client";
import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import Button from "./Button";


import customDevAnimation from "./animations/icon-custom-development.json";
import mobileAppAnimation from "../components/animations/icon-mobile-development.json";
import blockchainAnimation from "../components/animations/icon-block-chain.json";
import erpAnimation from "../components/animations/icon-erp-development.json";
import luxuryLeasingAnimation from "../components/animations/icon-luxury-leasing-solutions.json";
import cloudAnimation from "../components/animations/icon-cloud-services.json";
import digitalMarketingAnimation from "../components/animations/icon-digital-marketing.json";
import aiMLAnimation from "../components/animations/icon-ai-development.json";

const services = [
  {
    animation: customDevAnimation,
    title: "Custom Development",
    description:
      "Tailored software solutions designed to meet your unique business requirements and drive growth.",
    href: "/services/web-development",
  },
  {
    animation: mobileAppAnimation,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
    href: "/services/mobile-app-development",
  },
  {
    animation: blockchainAnimation,
    title: "Blockchain Development",
    description:
      "Secure blockchain solutions, smart contracts, and decentralized applications for the future.",
    href: "/services/blockchain-development",
  },
  {
    animation: erpAnimation,
    title: "ERP Development",
    description:
      "Enterprise resource planning systems to streamline your business operations and increase efficiency.",
    href: "/services/erp-solutions",
  },
  {
    animation: luxuryLeasingAnimation,
    title: "Luxury Leasing Solutions",
    description:
      "We are a leading venture capital firm committed to supporting visionary entrepreneurs and fueling the growth.",
    href: "/services/luxury-leasing-solutions",
  },
  {
    animation: cloudAnimation,
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure and services to support your business growth and digital transformation.",
    href: "/services/cloud-solutions",
  },
  {
    animation: digitalMarketingAnimation,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
    href: "/services/digital-marketing",
  },
  {
    animation: aiMLAnimation,
    title: "AI & ML Development",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning technologies.",
    href: "/services/ai-ml-solutions",
  },
];

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#F5F5F7]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full bg-white text-[#6B1C95] shadow-lg">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[#6E6E73] rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-[#6E6E73]">
            Empowering your business with digital solutions that drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 transform h-full flex flex-col ${
                  hoveredIndex === index
                    ? "-translate-y-4 shadow-2xl scale-105"
                    : "hover:-translate-y-2"
                }`}
                style={{
                  borderTop: hoveredIndex === index ? "4px solid #6B1C95" : "4px solid transparent",
                }}
              >
                {/* Animation container with gradient background */}
                <div
                  className={`w-28 h-28 mx-auto mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                    hoveredIndex === index
                      ? "scale-110 shadow-lg"
                      : "scale-100"
                  }`}
                  style={{
                    background: hoveredIndex === index
                      ? "linear-gradient(135deg, rgba(107, 28, 149, 0.1) 0%, rgba(107, 28, 149, 0.05) 100%)"
                      : "transparent",
                  }}
                >
                  <div className="relative z-10">
                    <Lottie
                      animationData={service.animation}
                      loop={true}
                      autoplay={true}
                      style={{
                        width: "112px",
                        height: "112px",
                        filter: hoveredIndex === index 
                          ? "grayscale(0%) drop-shadow(0 10px 20px rgba(107, 28, 149, 0.3))" 
                          : "grayscale(100%)",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="grow">
                  <h3
                    className={`text-xl font-bold mb-4 transition-all duration-300 ${
                      hoveredIndex === index ? "text-[#6B1C95]" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={service.href}
                  className={`font-semibold flex items-center justify-center transition-all duration-300 w-full py-3 rounded-lg ${
                    hoveredIndex === index
                      ? "bg-[#6B1C95] text-white shadow-lg"
                      : "text-[#6B1C95] bg-transparent hover:text-[#5A1780] hover:bg-gray-50"
                  }`}
                >
                  <span>Read More</span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "translate-x-2"
                        : "group-hover:translate-x-1"
                    }`}
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
                </Link>
              </div>

              {/* Glow effect on hover */}
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-xl -z-10 transition-opacity duration-500"
                  style={{ backgroundColor: "#6B1C95" }}
                ></div>
              )}
            </div>
          ))}
        </div>
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
