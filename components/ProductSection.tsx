import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// You'll need to add these styles in your global CSS or import them:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Products() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Featured Products
        </h2>
        <div className="relative">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            <div className="px-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-r from-amber-600 to-amber-700 ">
                  <Image
                    src="/static/img/chokar.png"
                    alt="Pitho"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Chokar Yukta Chakki Pitho
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Traditional Nepalese rice flour
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-r from-yellow-400 to-orange-500">
                  <Image
                    src="/static/img/chicken-gizzard-pickle.png"
                    alt="Masu ko Achar"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Masu ko Achar
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Spicy chicken gizzard pickle
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-r from-green-400 to-emerald-500">
                  <Image
                    src="/static/img/bitter-gourd-pickle.png"
                    alt="Karela ko Achar"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Karela ko Achar
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Tangy bitter gourd pickle
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-r from-red-500 to-pink-500">
                  <Image
                    src="/static/img/green-chili-paste-pickle.png"
                    alt="Khursani ko Ledo Achar"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Khursani ko Ledo Achar
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Fiery green chili paste pickle
                  </p>
                </div>
              </div>
            </div>
          </Slider>
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md z-10"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md z-10"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
