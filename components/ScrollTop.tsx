"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 bg-green-500 rounded-full p-3 cursor-pointer ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp size={24} color="#fff" />
    </div>
  );
};

export default ScrollToTopButton;
