import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, ImageIcon, RotateCw } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Product {
  name: string;
  description: string;
  image: string;
  ingredients: string;
  ingredientsImage: string;
  isNew: boolean;
  category: string;
}

const bestSellers: Product[] = [
  {
    name: "Chokar Yukta Chakki Aata",
    description: "Traditional Nepalese rice flour",
    image: "/static/img/chokar.png",
    ingredients: "100% Whole Wheat",
    ingredientsImage: "",
    isNew: true,
    category: "flour",
  },
  {
    name: "Pangra ko Achar",
    description: "Spicy chicken gizzard pickle",
    image: "/static/img/chicken-gizzard-pickle.png",
    ingredients: "Chicken Gizzard, Oil, Spices, Salt",
    ingredientsImage: "/static/img/gizzard-back.png",
    isNew: true,
    category: "pickle",
  },
  {
    name: "Karela ko Achar",
    description: "Tangy bitter gourd pickle",
    image: "/static/img/bitter-gourd-pickle.png",
    ingredients: "Bitter Gourd, Oil, Spices, Salt",
    ingredientsImage: "/static/img/karela-back.png",
    isNew: false,
    category: "pickle",
  },
  {
    name: "Chicken Achar",
    description: "Chicken Pickle",
    image: "/static/img/chicken.png",
    ingredients: "Chicken, Oil, Spices, Salt",
    ingredientsImage: "/static/img/chicken-back.png",
    isNew: false,
    category: "pickle",
  },
];
function ProductCard({ product }: { product: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="px-4" onMouseLeave={() => setIsFlipped(false)}>
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
          className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front of the card */}
          <Card className="absolute w-full h-full backface-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent_80%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_80%)]" />
            <div className="relative h-full">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {product.isNew && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">
                    New
                  </Badge>
                )}
                {product.category && (
                  <Badge
                    variant="outline"
                    className="bg-white/80 dark:bg-gray-900/80"
                  >
                    {product.category}
                  </Badge>
                )}
              </div>
              <Image
                src={product.image}
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-amber-100/20 dark:border-amber-900/20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100 font-serif">
                  {product.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light">
                {product.description}
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <RotateCw className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
            </div>
          </Card>

          {/* Back of the card */}
          <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50 dark:from-amber-900 dark:via-orange-950 dark:to-yellow-950">
            <div className="relative h-full">
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
                  <ImageIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4 text-amber-300 dark:text-amber-700" />
                  <p className="text-sm sm:text-base font-medium text-center text-amber-600 dark:text-amber-400">
                    Ingredients Image Coming Soon
                  </p>
                </div>
              )}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mb-2 sm:mb-4">
                  Traditional Ingredients
                </h4>
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed font-light">
                  {product.ingredients}
                </p>
              </div> */}
            </div>
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <RotateCw className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
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
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
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
      className="py-12 sm:py-16 lg:py-24 bg-gray-50/50 dark:bg-gray-950 transition-colors duration-200"
    >
      <div className="px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-800 text-center dark:text-gray-100">
          Our Best Sellers
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto font-light">
          Discover our most loved products, crafted with authentic Nepalese
          recipes and traditions
        </p>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {bestSellers.map((product, index) => (
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
