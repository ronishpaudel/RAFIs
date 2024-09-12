export function HeroSection() {
  return (
    <section className="relative bg-green-600 min-h-[60vh] flex items-center">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-poppins bg-gradient-to-r from-green-900 to-green-950 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-300">
            Eat Healthy, Stay Healthy
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-poppins text-gray-900 dark:text-gray-200">
            Discover our range of quality food products for a healthier you. We
            provide quality food products and are involved in agriculture.
          </p>
          <a
            href="/products"
            className="inline-block text-green-700 bg-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 dark:hover:bg-green-600 transition duration-300 text-sm sm:text-base shadow-lg dark:shadow-md"
          >
            Explore Our Products
          </a>
        </div>
      </div>
      {/* Background image section */}
      <div className="absolute inset-0 bg-black opacity-10 z-10 dark:opacity-20"></div>
      {/* <div className="absolute inset-0 z-0 w-full h-full max-w-[1920px] mx-auto">
        <Image
          src="/static/img/banner.webp" // Ensure this is the correct path
          alt="Vibrant Vegetables in Market"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
          className="dark:brightness-75" // Make it blend better in dark mode
        />
      </div> */}
      {/* Slight backdrop blur effect for added blending */}
      <div className="absolute inset-0 backdrop-blur-[4px] z-0"></div>
    </section>
  );
}
