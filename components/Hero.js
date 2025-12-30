"use client";

import { useRef, useEffect } from "react";
import Button from "./Button";

export default function Hero() {
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const unmuteVideos = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.muted = false;
      }
    };

    // Unmute videos after first user interaction
    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((event) => {
      window.addEventListener(event, unmuteVideos, { once: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, unmuteVideos);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 via-black to-gray-800 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero/banner-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        </video>
        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero/banner-video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          WE BUILD & REFINE
          <br />
          <span style={{ color: "#6B1C95" }}>SMART WEB SOLUTIONS</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We deliver end-to-end web design, development & marketing services
          with 200% approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="text-lg !px-4 py-2">
            Get Started
          </Button>
          <Button variant="outline" className="text-lg !px-4 py-2">
            View Our Work
          </Button>
        </div>
      </div>

      {/* Award Banner */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 py-3"
        style={{ backgroundColor: "#6B1C95" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-white text-sm md:text-base">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">
              From our Blog: Explore the latest updates, insights, and success
              stories from our team...
            </span>
          </div>
        </div>
      </div> */}
    </section>
  );
}
