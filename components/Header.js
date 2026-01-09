"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position after mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted && isScrolled ? "bg-white shadow-md" : " "
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Desktop Navigation */}
          <div className="flex items-center space-x-4 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <Image
                src={mounted && isScrolled ? "/logo/logodnew.png" : "/logodnew.png"}
                alt="Alaqa Logo"
                width={150}
                height={100}
                className="object-contain transition-all duration-300"
              /> */}

              <Image
                src={"/logo/logodnew.png"}
                alt="Alaqa Logo"
                width={150}
                height={100}
                className={`object-contain transition-all duration-300 ${
                  mounted && !isScrolled ? "invert" : ""
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 ml-auto">
              {/* Phone Icon - Circular */}
              <a
                href="tel:+1234567890"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  mounted && isScrolled
                    ? "border-[#383645] text-[#383645] hover:border-[#6B1C95] hover:text-[#6B1C95]"
                    : "border-white text-white hover:border-[#6B1C95] hover:text-[#6B1C95]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>

              {/* Email Icon - Circular */}
              <a
                href="mailto:info@alaqa.com"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  mounted && isScrolled
                    ? "border-[#383645] text-[#383645] hover:border-[#6B1C95] hover:text-[#6B1C95]"
                    : "border-white text-white hover:border-[#6B1C95] hover:text-[#6B1C95]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>

              {/* WhatsApp Icon - Circular */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  mounted && isScrolled
                    ? "border-[#383645] text-[#383645] hover:border-[#6B1C95] hover:text-[#6B1C95]"
                    : "border-white text-white hover:border-[#6B1C95] hover:text-[#6B1C95]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Skype Icon - Circular */}
              <a
                href="skype:alaqa?call"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  mounted && isScrolled
                    ? "border-[#383645] text-[#383645] hover:border-[#6B1C95] hover:text-[#6B1C95]"
                    : "border-white text-white hover:border-[#6B1C95] hover:text-[#6B1C95]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 0C5.408-.02.004 5.37.004 11.992c0 2.701.96 5.24 2.608 7.2a.795.795 0 0 1 .208.32l-1.22 3.84 4.12-1.2a.792.792 0 0 1 .32.2 11.95 11.95 0 0 0 5.6 1.38h.004c6.624 0 11.99-5.37 11.99-12 0-6.624-5.37-11.992-11.99-11.992L12.04 0zm-.64 15.52c-1.58 0-2.8-.48-3.64-1.44-.88-.96-1.32-2.28-1.32-3.96 0-1.32.4-2.4 1.2-3.24.8-.84 1.92-1.24 3.36-1.24 1.56 0 2.76.48 3.6 1.44.84.96 1.24 2.28 1.24 3.96 0 1.28-.4 2.36-1.2 3.2-.84.88-1.96 1.28-3.36 1.28zm5.24-5.88c-.12-.08-.72-.48-1.6-.48-.48 0-.88.08-1.2.24-.32.16-.72.48-1.2.96-.24.24-.48.4-.72.52-.24.12-.48.2-.72.2-.16 0-.32-.04-.48-.12-.16-.08-.28-.2-.36-.36-.08-.16-.12-.36-.12-.6 0-.24.04-.48.12-.72.08-.24.2-.48.36-.72.16-.24.36-.48.6-.72.48-.48 1.04-.88 1.68-1.2.64-.32 1.36-.48 2.16-.48.8 0 1.48.16 2.04.48.56.32 1 .72 1.32 1.2.32.48.48 1.04.48 1.68 0 .32-.04.6-.12.84-.08.24-.2.44-.36.6-.16.16-.36.28-.6.36-.24.08-.52.12-.84.12-.24 0-.48-.04-.72-.12z" />
                </svg>
              </a>

              {/* Contact Us Button */}
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-lg border-2 font-bold text-sm uppercase transition-all duration-300 hover:scale-105 mr-4 ${
                  mounted && isScrolled
                    ? "border-[#383645] text-[#383645] bg-transparent hover:bg-[#6B1C95] hover:border-[#6B1C95] hover:text-white"
                    : "border-white text-white bg-transparent hover:bg-white hover:text-black"
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right Side - Mobile Menu Button */}
          <button
            className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
              mounted && isScrolled
                ? "border-[#383645] text-[#383645] hover:border-[#6B1C95] hover:text-[#6B1C95]"
                : "border-white text-white hover:border-[#6B1C95] hover:text-[#6B1C95]"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Component - Rendered outside header to avoid z-index issues */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
