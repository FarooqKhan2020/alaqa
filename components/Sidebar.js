"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  const [expandedItems, setExpandedItems] = useState({
    services: false,
    hireEngineers: false,
    career: false,
    company: false,
  });

  const toggleItem = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = [
    {
      id: "services",
      label: "SERVICES",
      href: "/services",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      hasDropdown: true,
      subItems: [
        { label: "All Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Blockchain Development", href: "/services/blockchain-development" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions" },
        { label: "AI & ML Solutions", href: "/services/ai-ml-solutions" },
        { label: "ERP Solutions", href: "/services/erp-solutions" }
      ],
    },
    {
      id: "products",
      label: "PRODUCTS",
      href: "/products",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      hasDropdown: false,
    },
    {
      id: "hireEngineers",
      label: "HIRE ENGINEERS",
      href: "/hire-engineer",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      hasDropdown: true,
      subItems: [
        { label: "All Engineers", href: "/hire-engineer" },
        { label: "React Developer", href: "/hire-engineer/react-developer" },
        { label: "Node.js Developer", href: "/hire-engineer/nodejs-developer" },
        { label: "Full Stack Developer", href: "/hire-engineer/full-stack-developer" },
        { label: "Mobile Developer", href: "/hire-engineer/mobile-developer" },
        { label: "PHP Developer", href: "/hire-engineer/php-developer" },
        { label: "Java Developer", href: "/hire-engineer/java-developer" },
        { label: ".NET Developer", href: "/hire-engineer/dotnet-developer" },
        { label: "Python Developer", href: "/hire-engineer/python-developer" }
      ],
    },
    {
      id: "portfolio",
      label: "PORTFOLIO",
      href: "/portfolio",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      hasDropdown: false,
    },
    {
      id: "career",
      label: "CAREER",
      href: "/careers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
      hasDropdown: false,
    },
    {
      id: "company",
      label: "COMPANY",
      href: "/about",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      hasDropdown: true,
      subItems: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" }
      ],
    },
    {
      id: "contact",
      label: "CONTACT US",
      href: "/contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      hasDropdown: false,
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted || typeof window === 'undefined') return null;

  const sidebarContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white z-[70] shadow-2xl flex flex-col overflow-hidden animate-slide-in-right">
        {/* Orange Gradient Header with Wavy Line */}
        <div className="relative pt-6 pb-8 px-6" style={{ background: "linear-gradient(to bottom right, #6B1C95, #5A1780)" }}>
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Wavy Line Separator */}
          <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
            <svg
              viewBox="0 0 400 60"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 Q100,30 200,45 T400,35 L400,60 L0,60 Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Menu Items - Scrollable */}
        <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
          {menuItems.map((item) => {
            const isExpanded = expandedItems[item.id];
            const isActive = isExpanded; // Active when expanded

            return (
              <div key={item.id} className="mb-1">
                {/* Main Menu Item */}
                {item.hasDropdown ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(item.id);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isActive ? { backgroundColor: "#6B1C95" } : {}}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 ${
                          isActive ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {item.icon}
                      </div>
                      {/* Label */}
                      <span className="font-semibold text-sm uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>

                    {/* Chevron */}
                    <svg
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                        isActive ? "text-white" : "text-gray-400"
                      } ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => onClose()}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 ${
                      "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {/* Icon */}
                      <div className="flex-shrink-0 text-gray-400">
                        {item.icon}
                      </div>
                      {/* Label */}
                      <span className="font-semibold text-sm uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                )}

                {/* Sub Items */}
                {item.hasDropdown && isExpanded && item.subItems && item.subItems.length > 0 && (
                  <div className="mt-1 ml-14 space-y-0.5 bg-white">
                    {item.subItems.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        onClick={() => onClose()}
                        className="block px-4 py-2.5 text-sm text-gray-700 rounded-lg transition-colors"
                        style={{ "--hover-color": "#6B1C95", "--hover-bg": "rgba(107, 28, 149, 0.1)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#6B1C95";
                          e.currentTarget.style.backgroundColor = "rgba(107, 28, 149, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#374151";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  return createPortal(sidebarContent, document.body);
}

