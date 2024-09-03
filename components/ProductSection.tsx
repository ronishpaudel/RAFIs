import Image from "next/image";

export default function Products() {
  const featuredProducts = [
    {
      name: "Pitho",
      image: "/static/img/rice.png",
    },
    {
      name: "Masu ko Achar",
      image: "/static/img/chicken-gizzard-pickle.png",
    },
    // {
    //   name: "Pangra ko Achar",
    //   image: "/placeholder",
    // },
    {
      name: "Karela ko Achar",
      image: "/static/img/bitter-gourd-pickle.png",
    },
    {
      name: "Khursani ko Ledo Achar",
      image: "/static/img/green-chili-paste-pickle.png", // Replace with actual image path
    },
    {
      name: "केराउको पिठो (बेसन प्रयोजनको लागि)",
      image: "/static/img/pea.png",
    },
  ];

  return (
    <section
      id="products"
      className="py-16 bg-gray-100 dark:bg-black transition-colors duration-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-green-600/70 hover:scale-105 cursor-pointer flex flex-col h-full"
            >
              <div className="relative flex-grow flex items-center justify-center p-4 bg-gradient-radial from-green-500 to-transparent dark:from-green-700 dark:to-transparent">
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
      </div>
    </section>
  );
}
