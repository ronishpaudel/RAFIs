import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, ImageIcon, RotateCw } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";
interface Product {
  name: string;
  description: string;
  image: string;
  ingredients: string;
  ingredientsImage: string;
}

const bestSellers: Product[] = [
  {
    name: "Chokar Yukta Chakki Aata",
    description: "Traditional Nepalese rice flour",
    image: "/static/img/chokar.png",
    ingredients: "100% Whole Wheat",
    ingredientsImage: "",
  },
  {
    name: "Masu ko Achar",
    description: "Spicy chicken gizzard pickle",
    image: "/static/img/chicken-gizzard-pickle.png",
    ingredients: "Chicken Gizzard, Oil, Spices, Salt",
    ingredientsImage: "/static/img/gizzard-back.png",
  },
  {
    name: "Karela ko Achar",
    description: "Tangy bitter gourd pickle",
    image: "/static/img/bitter-gourd-pickle.png",
    ingredients: "Bitter Gourd, Oil, Spices, Salt",
    ingredientsImage: "/static/img/karela-back.png",
  },
  {
    name: "Chicken Achar",
    description: "Chicken Pickle",
    image: "/static/img/chicken.png",
    ingredients: "Chicken, Oil, Spices, Salt",
    ingredientsImage: "/static/img/chicken-back.png",
  },
];

function ProductCard({ product }: { product: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="px-2" onMouseLeave={() => setIsFlipped(false)}>
      <div
        className="h-[400px] w-full perspective cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)} // Flip on click
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
          {/* Front of the card */}
          <Card className="absolute w-full h-full backface-hidden">
            <div className="relative h-full bg-gradient-radial from-amber-950 to-transparent dark:from-amber-950 dark:to-transparent">
              <Image
                src={product.image}
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {product.description}
              </p>
            </div>
            <div className="absolute top-2 right-2 bg-white dark:bg-gray-950 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RotateCw className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </Card>

          {/* Back of the card */}
          <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden">
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
                <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-radial from-amber-100 to-transparent dark:from-amber-900 dark:to-transparent">
                  <ImageIcon className="w-24 h-24 mb-2 text-gray-400 dark:text-gray-600" />
                  <p className="text-sm font-medium text-center text-gray-600 dark:text-gray-400">
                    No Ingredients Image Available
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-semibold text-white mb-3 font-inter">
                  Ingredients
                </h4>
                <p className="text-base text-gray-200 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-white dark:bg-gray-950 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RotateCw className="w-6 h-6 text-gray-600 dark:text-gray-300" />
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
      className="py-16 bg-gray-100 dark:bg-black transition-colors duration-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center dark:text-gray-100">
          Best Seller
        </h2>
        <div className="relative px-8">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {bestSellers.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Slider>
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md z-10"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md z-10"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
