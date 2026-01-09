"use client";

const certifications = [
  { name: "ISO 9001:2015", logo: "/certifications/27001-c.webp" },
  { name: "PSEB", logo: "/certifications/psb.webp" },
  { name: "PASHA", logo: "/certifications/pash.webp" },
  { name: "ISO 27001:2013", logo: "/certifications/27001-c.webp" },
  { name: "Global", logo: "/certifications/sep-logo.webp" },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            CERTIFICATIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by globally recognized authorities ensuring quality & excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                group relative flex items-center justify-center
                w-32 h-32 md:w-40 md:h-40 
                rounded-full shadow-md bg-white/70 backdrop-blur-sm
                border border-gray-200
                overflow-hidden
                transition-all duration-300
                hover:scale-110 hover:shadow-2xl hover:border-[#6B1C95]
              "
            >
              {/* Outer animated ring */}
              <div
                className="
                  absolute inset-0 rounded-full border-2 border-transparent
                  group-hover:border-[#6B1C95] group-hover:animate-pulse
                "
              ></div>

              {/* Logo */}
              <img
                src={cert.logo}
                alt={cert.name}
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#6B1C95]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
