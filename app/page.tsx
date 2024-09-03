"use client";
import Advantages from "@/components/AdvantageSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemSection";
import Products from "@/components/ProductSection";
import Testimonials from "@/components/Testimonial";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <Products />
      <ProblemsSection />
      <Advantages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Page;
