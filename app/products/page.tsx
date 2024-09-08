"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, ImageIcon, Sparkles } from "lucide-react";
import Image from "next/image";

export default function page() {
  const products = {
    flour: [
      {
        name: "Wheat Flour (चोकर युक्त चक्की पिठो)",
        image: "/static/img/chokar.png",
      },
      {
        name: "Gram Flour (चना दाल बेसन)",
        image: "/static/img/chana.png",
      },
      {
        name: "Rice Flour (चामलको पिठो)",
        image: "/static/img/rice.png",
      },
      {
        name: "Pea Flour (केराउको पिठो - बेसन प्रयोजनको लागि)",
        image: "/static/img/pea.png",
      },
    ],
    pickles: [
      {
        name: "Chicken Pickle (कुखुराको मासुको अचार)",
        image: "",
        status: "available",
      },
      {
        name: "Bitter Gourd Pickle (करेलाको अचार)",
        image: "/static/img/bitter-gourd-pickle.png",
        status: "available",
      },
      {
        name: "Chicken Gizzard Pickle (कुखुराको पांग्राको अचार)",
        image: "/static/img/chicken-gizzard-pickle.png",
        status: "available",
      },
      {
        name: "Green Chili Paste Pickle (खुर्सानीको लेदो अचार)",
        image: "/static/img/green-chili-paste-pickle.png",
        status: "available",
      },
      {
        name: "Green Chilli Pickle (खुर्सानीको अचार)",
        image: "",
        status: "available",
      },
      {
        name: "Garlic Pickle (लसुनको अचार)",
        image: "",
        status: "upcoming",
      },
      {
        name: "Garlic & Szechuan Dry Pickle (लसुन र टिमुरको छोप)",
        image: "",
        status: "upcoming",
      },
      {
        name: "Dried Fish & Szechuan Dry Pickle (सिध्रा र टिमुरको छोप)",
        image: "",
        status: "coming-soon",
      },
      {
        name: "Mushroom Pickle (च्याउको अचार)",
        image: "",
        status: "coming-soon",
      },
    ],
  };

  return (
    <section
      id="products"
      className=" bg-gray-100 dark:bg-black transition-colors duration-200 "
    >
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Our Products
        </h2>

        <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          A. Flour Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.flour.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer flex flex-col h-full"
            >
              <div className="relative flex-grow flex items-center justify-center p-4 bg-gradient-radial from-green-200 to-transparent dark:from-green-950 dark:to-transparent">
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

        <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          B. Pickle Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.pickles.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-radial from-amber-100 to-transparent dark:from-amber-950 dark:to-transparent overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-white">
                    <ImageIcon className="w-24 h-24 mb-2" />
                    <p className="text-sm font-medium text-center">
                      No Image Available
                    </p>
                  </div>
                )}
                {product.status !== "available" && (
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
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold h-16 text-gray-800 dark:text-gray-100 line-clamp-2">
                  {product.name}
                </h3>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Badge
                  variant={
                    product.status === "available" ? "default" : "outline"
                  }
                >
                  {product.status === "available"
                    ? "Available"
                    : product.status === "upcoming"
                    ? "Upcoming"
                    : "Coming Soon"}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
