"use client";
import Advantages from "@/components/AdvantageSection";
import BestSeller from "@/components/BestSellerSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemSection";
import Products from "@/components/ProductSection";
import ScrollToTopButton from "@/components/ScrollTop";
import Testimonials from "@/components/Testimonial";
import { WhyChooseRegro } from "@/components/WhyChooseRegro";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <BestSeller />
      <ProblemsSection />
      <Advantages />
      <Products />
      <WhyChooseRegro />
      <Testimonials />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
