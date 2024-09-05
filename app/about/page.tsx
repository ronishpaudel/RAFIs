"use client";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface ImageWithPlaceholderProps {
  src?: string;
  alt: string;
  [key: string]: any;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  ...props
}) => {
  return (
    <div className="relative w-full h-full">
      {src ? (
        <Image src={src} alt={alt} {...props} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white dark:bg-gray-950">
          <ImageIcon className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-2" />
          <p className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            No Image Available
          </p>
        </div>
      )}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Header />
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            About RAFIS
          </h1>
          <div className="mb-12 relative h-64 sm:h-96 rounded-lg overflow-hidden">
            <ImageWithPlaceholder
              src=""
              alt="People working happily at Regro"
              fill
              className="object-cover"
            />
          </div>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Shop Healthy, Stay Happy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                RAFIs, also known as Regro, is situated in the central location
                of Nepalgunj City. We provide quality food products and have
                involvement in Agriculture as well. Our aim is to provide
                healthy food options and encourage healthy living by building a
                community of conscious and passionate stakeholders.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on the cohesive wellbeing of oneself, communities, and
                nature in a holistic manner. Our stakeholders include
                businesses, producers, bakers, farmers, and consumers who are
                all committed to this vision.
              </p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide the highest quality, healthiest food options to our
                  community while supporting local agriculture and sustainable
                  practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A world where healthy living is accessible to all, and where
                  our food choices positively impact our communities and the
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <ImageWithPlaceholder
                src=""
                alt="People working happily at Regro"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <ImageWithPlaceholder
                src=""
                alt="Regro products display"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <ImageWithPlaceholder
                src=""
                alt="Regro agricultural involvement"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <ImageWithPlaceholder
                src=""
                alt="People working happily at Regro"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <ImageWithPlaceholder
                src=""
                alt="Regro products display"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <ImageWithPlaceholder
                src=""
                alt="Regro agricultural involvement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
