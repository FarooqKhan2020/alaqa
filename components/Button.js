"use client";

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "text-white shadow-lg hover:shadow-xl",
    outline: "border-2 bg-white",
    secondary: "bg-white border-2",
  };

  const getStyle = () => {
    if (variant === "primary") {
      return { backgroundColor: "#6B1C95" };
    } else if (variant === "outline") {
      return { borderColor: "#6B1C95", color: "#6B1C95" };
    } else if (variant === "secondary") {
      return { borderColor: "6B1C95", color: "#6B1C95" };
    }
    return {};
  };

  const handleMouseEnter = (e) => {
    if (variant === "primary") {
      e.currentTarget.style.backgroundColor = "#5A1780";
    } else if (variant === "outline") {
      e.currentTarget.style.backgroundColor = "#6B1C95";
      e.currentTarget.style.color = "white";
    } else if (variant === "secondary") {
      e.currentTarget.style.backgroundColor = "#6B1C95";
      e.currentTarget.style.color = "white";
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === "primary") {
      e.currentTarget.style.backgroundColor = "#6B1C95";
    } else if (variant === "outline") {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "#6B1C95";
    } else if (variant === "secondary") {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "#6B1C95";
    }
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={getStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}

