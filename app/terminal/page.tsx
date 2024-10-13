"use client";
import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  Leaf,
  Shield,
  Heart,
} from "lucide-react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

interface Location {
  city: string;
  address: string;
  description: string;
}

const locations: Location[] = [
  {
    city: "Kathmandu",
    address: "123 Main St, Kathmandu",
    description: "Our flagship store in the heart of Kathmandu.",
  },
  {
    city: "Pokhara",
    address: "456 Lake Rd, Pokhara",
    description: "Lakeside location with a beautiful view.",
  },
  {
    city: "Chitwan",
    address: "789 Forest Ave, Chitwan",
    description: "Near the national park, perfect for nature lovers.",
  },
  {
    city: "Bhaktapur",
    address: "101 Heritage Blvd, Bhaktapur",
    description: "Located in the historic Durbar Square.",
  },
];

interface LocationCardProps extends Location {}

const LocationCard: React.FC<LocationCardProps> = ({
  city,
  address,
  description,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 transition-all duration-300 ease-in-out hover:shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-amber-600">{city}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-600" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          <p>{address}</p>
          <p className="mt-2 text-sm italic">{description}</p>
        </div>
      )}
    </div>
  );
};

const AvailabilitySection: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-amber-600">
            Eat Healthy, Stay Healthy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Regmi Agro & Food Industries: Delivering hygienic, nutritious, and
            delicious products across Nepal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Leaf className="w-12 h-12 text-green-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">
                Sustainable Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to eco-friendly production methods
              </p>
            </div>
            <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rigorous standards for safe, high-quality products
              </p>
            </div>
            <div className="bg-amber-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enhancing well-being through nutrition
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <MapPin className="w-8 h-8 mr-3 text-amber-600" />
            Find Our Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Discover the taste of Nepal! Our artisanal pickle products are
            available at these prime locations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AvailabilitySection;
