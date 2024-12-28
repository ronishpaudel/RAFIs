"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ImageIcon, RotateCw } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  name: string;
  description: string;
  image: string;
  ingredients: string;
  ingredientsImage: string;
  category: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    name: "Chokar Yukta Chakki Pitho",
    description: "Traditional Nepalese rice flour",
    image: "/static/img/chokar.png",
    ingredients:
      "100% Whole Wheat sourced from Nepal's finest wheat fields, stone-ground using traditional methods",
    ingredientsImage: "",
    category: "Flour",
    isNew: true,
  },
  {
    name: "Masu ko Achar",
    description: "Spicy chicken gizzard pickle",
    image: "/static/img/chicken-gizzard-pickle.png",
    ingredients:
      "Fresh Chicken Gizzard, Himalayan Rock Salt, Premium Mustard Oil, Traditional Spice Blend",
    ingredientsImage: "/static/img/gizzard-back.png",
    category: "Non-Veg Pickle",
  },
  {
    name: "Karela ko Achar",
    description: "Tangy bitter gourd pickle",

    image: "/static/img/bitter-gourd-pickle.png",
    ingredients:
      "Fresh Bitter Gourd, Himalayan Rock Salt, Premium Mustard Oil, Traditional Herbs",
    ingredientsImage: "/static/img/karela-back.png",
    category: "Veg Pickle",
    isNew: true,
  },
  {
    name: "Khursani ko Ledo Achar",
    description: "Fiery green chili paste pickle",
    image: "/static/img/green-chili-paste-pickle.png",
    ingredients:
      "Fresh Green Chilies, Himalayan Rock Salt, Premium Mustard Oil, Authentic Spices",
    ingredientsImage: "/static/img/chilli-back.png",
    category: "Spicy Paste",
  },
];

function ProductCard({ product }: { product: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="px-3" onMouseLeave={() => setIsFlipped(false)}>
      <div
        className="h-[400px] w-full perspective cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsFlipped(!isFlipped);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${product.name}. Click to ${
          isFlipped ? "see product" : "see ingredients"
        }.`}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Card */}
          <Card className="absolute w-full h-full backface-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-full bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 dark:from-amber-950/30 dark:via-gray-950 dark:to-orange-950/20">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {product.isNew && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    New
                  </Badge>
                )}
                <Badge
                  variant="outline"
                  className="bg-white/80 dark:bg-gray-900/80"
                >
                  {product.category}
                </Badge>
              </div>
              <Image
                src={product.image}
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-t border-amber-100/20 dark:border-amber-900/20">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 font-serif leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RotateCw className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
          </Card>

          {/* Back Card */}
          <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden">
            <div className="relative h-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
              {product.ingredientsImage ? (
                <Image
                  src={product.ingredientsImage}
                  alt={`${product.name} ingredients`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-radial from-amber-100/50 to-transparent dark:from-amber-900/30 dark:to-transparent">
                  <ImageIcon className="w-16 h-16 sm:w-20 sm:h-20 text-amber-300 dark:text-amber-700" />
                  <p className="text-sm sm:text-base font-medium text-center text-amber-700 dark:text-amber-300 mt-4">
                    Ingredients Image Coming Soon
                  </p>
                </div>
              )}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl sm:text-2xl font-serif font-medium text-amber-50 mb-3">
                  Traditional Ingredients
                </h4>
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed font-light">
                  {product.ingredients}
                </p>
              </div> */}
            </div>
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RotateCw className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="products"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black transition-colors duration-200"
    >
      <div className="px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-gray-800 text-center dark:text-gray-100">
          Discover Our Heritage
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-12 max-w-2xl mx-auto font-light">
          Explore our carefully curated selection of authentic Nepalese
          delicacies, crafted with traditional recipes passed down through
          generations
        </p>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Slider>
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 sm:p-3 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 sm:p-3 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
