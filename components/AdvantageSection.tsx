import { CheckCircle } from "lucide-react";

export default function Advantages() {
  const advantages = [
    "Rich in essential nutrients",
    "Supports digestive health",
    "Boosts immune system",
    "Promotes heart health",
    "Helps maintain a healthy weight",
    "Enhances overall well-being",
    "Supports healthy skin",
    "Aids in muscle recovery",
    "Improves energy levels",
  ];

  return (
    <section id="advantages" className="py-16 bg-green-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Advantages of Healthy Food
        </h2>
        <div className="flex flex-wrap -mx-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4 flex items-start"
            >
              <div className="bg-green-500 rounded-full p-2 mr-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {advantage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
