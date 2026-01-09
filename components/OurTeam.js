'use client';

import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Mike Johnson",
    role: "Sr. Manager Coordination",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#6B1C95" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(currentIndex, currentIndex + 3).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-xl text-center transform transition-all duration-300 hover:scale-105"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 relative" style={{ borderColor: "#6B1C95" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="font-semibold" style={{ color: "#6B1C95" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

