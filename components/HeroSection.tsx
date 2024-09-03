import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-green-600 text-white min-h-[60vh] flex items-center">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-20 relative ">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-poppins">
            Shop Healthy, Stay Happy
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-poppins">
            Discover our range of quality food products for a healthier you. We
            provide quality food products and are involved in agriculture.
          </p>
          <a
            href="/products"
            className="inline-block text-white bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300 text-sm sm:text-base"
          >
            Explore Our Products
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/img/veggie.webp"
          alt="Vibrant Vegetables in Market"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 backdrop-blur-[3px] z-0"></div>
    </section>
  );
}
