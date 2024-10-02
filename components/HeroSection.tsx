import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center heroSection"></div>

      <div className="absolute inset-0  backdrop-blur-[2px] z-10"></div>

      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
        <div className="max-w-3xl bg-gray-800 bg-opacity-70 rounded-lg p-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4  leading-normal font-poppins bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text  text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-300">
            Eat Healthy, Stay Healthy
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-poppins bg-gradient-to-r from-gray-100 to-gray-200 text-transparent bg-clip-text dark:text-gray-200 ">
            Discover our range of quality food products for a healthier you. We
            provide quality food products and are involved in agriculture.
          </p>
          <a
            href="/products"
            className="inline-block text-green-700 bg-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:shadow-gray-400 hover:text-gray-100 dark:hover:bg-green-600 transition duration-300 text-sm sm:text-base shadow-lg dark:shadow-md"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}
