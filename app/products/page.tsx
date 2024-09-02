"use client";
import { Header } from "@/components/Header";
import Products from "@/components/ProductSection";
import React from "react";

const page = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Products />
    </div>
  );
};

export default page;
