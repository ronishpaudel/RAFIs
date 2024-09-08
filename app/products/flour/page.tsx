"use client";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import React from "react";

const flourProducts = [
  {
    name: "चोकर युक्त चक्की पिठो",
    image: "/static/img/chokar.png",
  },
  {
    name: "चना दाल बेसन",
    image: "/static/img/chana.png",
  },
  {
    name: "चामलको पिठो",
    image: "/static/img/rice.png",
  },
  {
    name: "केराउको पिठो (बेसन प्रयोजनको लागि)",
    image: "/static/img/pea.png",
  },
];

export default function Page() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Flour Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flourProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer flex flex-col h-full"
            >
              <div className="relative flex-grow flex items-center justify-center p-4 bg-gradient-radial from-amber-200 to-transparent dark:from-amber-950 dark:to-transparent">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="max-w-full max-h-[300px] w-auto h-auto object-contain"
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {product.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
