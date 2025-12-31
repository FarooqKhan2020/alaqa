"use client";

import Button from "./Button";
import Lottie from "lottie-react";
import iconCustomDevelopment from "./animations/New-animation.json";
// import iconCustomDevelopment from "./animations/Filled-icon.json";
// import iconCustomDevelopment from "./animations/lineicon.json";

export default function DrivingTransformation() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
              DRIVING YOUR
              <br />
              <span className="text-[#6B1C95]">DIGITAL TRANSFORMATION</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              We help enterprises through custom business solutions and provide
              IT outsourcing services to companies with agility, quality, and
              commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Hire Our Team
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                View Services
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 md:order-2 mb-8 md:mb-0 hidden md:block">
            <div
              className="w-90 h-64 sm:h-80 md:h-96 rounded-lg flex items-center justify-center transform rotate-12 opacity-20 overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, #6B1C95, #5A1780)",
              }}
            >
              <Lottie
                animationData={iconCustomDevelopment}
                loop={true}
                autoplay={true}
                style={{ width: "200px", height: "200px", opacity: 0.5 }}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg transform -rotate-12 shadow-2xl"
                style={{ backgroundColor: "#6B1C95" }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #6B1C95, #5A1780)",
                  }}
                >
                  <Lottie
                    animationData={iconCustomDevelopment}
                    loop={true}
                    autoplay={true}
                    style={{ width: "200px", height: "200px" }}
                    className="animate-rotate-smooth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
