"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, ImageIcon, Sparkles, RotateCw } from "lucide-react";

interface Product {
  name: string;
  image?: string;
  ingredientsImage?: string;
  ingredients: string;
  status?: "available" | "upcoming" | "coming-soon";
}

const products: { flour: Product[]; pickles: Product[] } = {
  flour: [
    {
      name: "Wheat Flour (चोकर युक्त चक्की पिठो)",
      image: "/static/img/chokar.png",
      ingredientsImage: "/static/img/wheat-ingredients.png",
      ingredients: "100% Whole Wheat",
    },
    {
      name: "Gram Flour (चना दाल बेसन)",
      image: "/static/img/chana.png",
      ingredientsImage: "/static/img/gram-ingredients.png",
      ingredients: "100% Ground Chickpeas",
    },
    {
      name: "Rice Flour (चामलको पिठो)",
      image: "/static/img/rice.png",
      ingredientsImage: "/static/img/rice-ingredients.png",
      ingredients: "100% Ground Rice",
    },
    {
      name: "Pea Flour (केराउको पिठो - बेसन प्रयोजनको लागि)",
      image: "/static/img/pea.png",
      ingredientsImage: "/static/img/pea-ingredients.png",
      ingredients: "100% Ground Yellow Peas",
    },
  ],
  pickles: [
    {
      name: "Chicken Pickle (कुखुराको मासुको अचार)",
      image: "",
      ingredientsImage: "",
      ingredients: "Chicken, Oil, Spices, Salt",
      status: "available",
    },
    {
      name: "Bitter Gourd Pickle (करेलाको अचार)",
      image: "/static/img/bitter-gourd-pickle.png",
      ingredientsImage: "/static/img/bitter-gourd-ingredients.png",
      ingredients: "Bitter Gourd, Oil, Spices, Salt",
      status: "available",
    },
    {
      name: "Chicken Gizzard Pickle (कुखुराको पांग्राको अचार)",
      image: "/static/img/chicken-gizzard-pickle.png",
      ingredientsImage: "/static/img/chicken-gizzard-ingredients.png",
      ingredients: "Chicken Gizzard, Oil, Spices, Salt",
      status: "available",
    },
    {
      name: "Green Chili Paste Pickle (खुर्सानीको लेदो अचार)",
      image: "/static/img/green-chili-paste-pickle.png",
      ingredientsImage: "/static/img/green-chili-paste-ingredients.png",
      ingredients: "Green Chili, Oil, Spices, Salt",
      status: "available",
    },
    {
      name: "Green Chilli Pickle (खुर्सानीको अचार)",
      image: "",
      ingredientsImage: "/static/img/green-chilli-ingredients.png",
      ingredients: "Green Chilli, Oil, Spices, Salt",
      status: "available",
    },
    {
      name: "Garlic Pickle (लसुनको अचार)",
      image: "",
      ingredientsImage: "",
      ingredients: "Garlic, Oil, Spices, Salt",
      status: "upcoming",
    },
    {
      name: "Garlic & Szechuan Dry Pickle (लसुन र टिमुरको छोप)",
      image: "",
      ingredientsImage: "",
      ingredients: "Garlic, Szechuan Pepper, Oil, Spices",
      status: "upcoming",
    },
    {
      name: "Dried Fish & Szechuan Dry Pickle (सिध्रा र टिमुरको छोप)",
      image: "",
      ingredientsImage: "",
      ingredients: "Dried Fish, Szechuan Pepper, Oil, Spices",
      status: "coming-soon",
    },
    {
      name: "Mushroom Pickle (च्याउको अचार)",
      image: "",
      ingredientsImage: "",
      ingredients: "Mushrooms, Oil, Spices, Salt",
      status: "coming-soon",
    },
  ],
};

function ProductCard({ product }: { product: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
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
        <Card className="absolute w-full h-full backface-hidden">
          <div className="relative h-full bg-gradient-radial from-amber-100 to-transparent dark:from-amber-900 dark:to-transparent">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-gray-600">
                <ImageIcon className="w-24 h-24 mb-2" />
                <p className="text-sm font-medium text-center">
                  No Image Available
                </p>
              </div>
            )}
            {product.status && product.status !== "available" && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Badge
                  variant="secondary"
                  className="text-lg font-semibold px-4 py-2 uppercase"
                >
                  {product.status === "upcoming" ? (
                    <>
                      <Clock className="w-5 h-5 mr-2" />
                      Upcoming
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Coming Soon
                    </>
                  )}
                </Badge>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 truncate font-inter">
              {product.name}
            </h3>
            {product.status && (
              <Badge
                variant={product.status === "available" ? "default" : "outline"}
                className="mt-2"
              >
                {product.status === "available"
                  ? "Available"
                  : product.status === "upcoming"
                  ? "Upcoming"
                  : "Coming Soon"}
              </Badge>
            )}
          </div>
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-950 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <RotateCw className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </div>
        </Card>
        <Card className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="relative h-full bg-white dark:bg-gray-950 p-4">
            {product.ingredientsImage ? (
              <Image
                src={product.ingredientsImage}
                alt={`${product.name} ingredients`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-gray-600">
                <ImageIcon className="w-24 h-24 mb-2" />
                <p className="text-sm font-medium text-center">
                  No Ingredients Image Available
                </p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 font-inter">
                Ingredients
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
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
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("flour");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black transition-colors duration-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Our Products
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="flour">Flour Products</TabsTrigger>
            <TabsTrigger value="pickles">Pickle Products</TabsTrigger>
          </TabsList>
          <TabsContent value="flour" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.flour.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pickles" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.pickles.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
