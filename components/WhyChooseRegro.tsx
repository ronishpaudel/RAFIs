import React from "react";
import { CheckCircle, Leaf, Package, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CheckCircle,
    title: "Hygienic & Nutritious",
    description:
      "Committed to providing hygienic, nutritious, and delicious food products, ensuring the highest standards of quality.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We source the finest ingredients using eco-friendly and sustainable methods to ensure our products are both healthy and environmentally responsible.",
  },
  {
    icon: Users,
    title: "Community Trust",
    description:
      "Trusted by communities across Nepal, we deliver safe, affordable, and flavorful food options that contribute to healthier lifestyles.",
  },
  {
    icon: Package,
    title: "Innovative Solutions",
    description:
      "Our diverse range of food products caters to the evolving tastes and needs of our customers, always with innovation at the core.",
  },
];

export function WhyChooseRegro() {
  return (
    <section className="relative flex flex-col lg:flex-row items-stretch min-h-screen bg-green-50">
      {/* Text section */}
      <div className="relative z-20 flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-green-800 mb-6">
              Why Choose Regro?
            </h2>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <feature.icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg font-poppins font-semibold text-green-700 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base font-libre text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full lg:w-1/2 h-96 lg:h-auto relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/static/img/banner2.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white p-6"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3">
              Quality You Can Trust
            </h3>
            <p className="text-base sm:text-lg font-libre max-w-lg mx-auto">
              Experience the difference with Regro's commitment to excellence in
              every product.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}