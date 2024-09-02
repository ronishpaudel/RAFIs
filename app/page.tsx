"use client";
import Advantages from "@/components/AdvantageSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import Products from "@/components/ProductSection";
import Testimonials from "@/components/Testimonial";
import React from "react";

const Page = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="w-full">
      <Header onSearch={handleSearch} />
      <HeroSection />
      <Products />
      <Advantages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Page;
