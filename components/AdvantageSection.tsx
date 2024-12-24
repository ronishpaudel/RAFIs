import { CheckCircle } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Advantages() {
  const advantages = [
    {
      title: "Rich in essential nutrients",
      description:
        "Packed with vitamins, minerals, and antioxidants your body needs",
    },
    {
      title: "Supports digestive health",
      description:
        "High fiber content promotes healthy digestion and gut bacteria",
    },
    {
      title: "Boosts immune system",
      description: "Strengthens your body's natural defense mechanisms",
    },
    {
      title: "Promotes heart health",
      description:
        "Helps maintain healthy cholesterol levels and blood pressure",
    },
    {
      title: "Helps maintain a healthy weight",
      description: "Nutrient-dense foods that keep you satisfied longer",
    },
    {
      title: "Enhances overall well-being",
      description: "Improves mood, energy levels, and mental clarity",
    },
    {
      title: "Supports healthy skin",
      description:
        "Provides nutrients essential for skin health and appearance",
    },
    {
      title: "Aids in muscle recovery",
      description:
        "Supplies proteins and nutrients for muscle repair and growth",
    },
    {
      title: "Improves energy levels",
      description: "Provides sustainable energy throughout the day",
    },
  ];

  return (
    <section
      id="advantages"
      className={`py-12 sm:py-16 lg:py-20 bg-green-50 dark:bg-gray-900 ${inter.className}`}
    >
      <div className=" px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-green-600 text-sm sm:text-base font-semibold tracking-wide uppercase mb-3">
            Benefits That Matter
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Advantages of Healthy Food
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover how a healthy diet can transform your life and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 flex items-start space-x-4"
            >
              <div className="bg-green-500 rounded-full p-2 group-hover:bg-green-600 transition-colors">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {advantage.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
