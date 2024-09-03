import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function page() {
  const products = {
    flour: [
      {
        name: "चोकर युक्त चक्की पिठो",
        image: "/placeholder.",
      },
      { name: "चना दाल बेसन", image: "/placeholder" },
      { name: "चामलको पिठो", image: "/placeholder" },
      {
        name: "केराउको पिठो (बेसन प्रयोजनको लागि)",
        image: "/placeholder",
      },
    ],
    pickles: [
      {
        name: "Chicken Pickle (कुखुराको मासुको अचार)",
        image: "/placeholder.",
      },
      {
        name: "Bitter Gourd Pickle (करेलाको अचार)",
        image: "/placeholder.",
      },
      {
        name: "Chicken Gizzard Pickle (कुखुराको पांग्राको अचार)",
        image: "/placeholder.",
      },
      {
        name: "Green Chili Paste Pickle (खुर्सानीको लेदो अचार)",
        image: "/placeholder.",
      },
      {
        name: "Green Chilli Pickle (खुर्सानीको अचार)",
        image: "/placeholder.",
      },
      {
        name: "Garlic Pickle (लसुनको अचार) Upcoming",
        image: "/placeholder.",
      },
      {
        name: "Garlic & Szechuan Dry Pickle (लसुन र टिमुरको छोप) Upcoming",
        image: "/placeholder.",
      },
      {
        name: "Dried Fish & Szechuan Dry Pickle (सिध्रा र टिमुरको छोप) Coming Soon",
        image: "/placeholder.",
      },
      {
        name: "Mushroom Pickle (च्याउको अचार) Coming Soon",
        image: "/placeholder.",
      },
    ],
  };

  return (
    <section
      id="products"
      className="py-16 bg-gray-100 dark:bg-black transition-colors duration-200"
    >
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
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
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {product.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
