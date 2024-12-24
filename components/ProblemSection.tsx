import * as React from "react";
import { AlertCircle, Frown, Heart, XCircle, Meh } from "lucide-react";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export function ProblemsSection() {
  const { theme } = useTheme();

  const problems = [
    {
      title: "Lack of Essential Nutrients",
      description:
        "Unhealthy food often lacks the essential vitamins and minerals that your body needs to function properly.",
      icon: <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
    {
      title: "Poor Digestive Health",
      description:
        "Foods high in refined sugars, unhealthy fats, and low in fiber can lead to digestive problems such as constipation and bloating.",
      icon: <Frown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
    {
      title: "Weakens the Immune System",
      description:
        "A diet rich in unhealthy food can suppress your immune system, making you more susceptible to illnesses.",
      icon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
    {
      title: "Leads to Weight Gain",
      description:
        "Unhealthy foods are often high in calories and low in nutrients, which can lead to overeating and weight gain.",
      icon: <Meh className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
    {
      title: "Increases Risk of Heart Disease",
      description:
        "High consumption of unhealthy fats and sugars can lead to increased cholesterol levels and blood pressure, increasing the risk of heart disease.",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
  ];

  return (
    <div
      className={`py-8 sm:py-12 ${inter.className}
        dark:bg-gray-950 dark:text-gray-100
        bg-gray-50 text-gray-900
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-sm sm:text-base font-semibold tracking-wide uppercase text-green-600">
            Problems with Unhealthy Food
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-tight font-extrabold tracking-tight">
            Understanding the Risks of Poor Dietary Choices
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Unhealthy food can have serious consequences for your body and mind.
            Here are some of the key problems associated with a poor diet.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative flex items-start p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <div
                className={`flex items-center justify-center p-2 rounded-md ${
                  theme === "dark" ? "bg-red-600" : "bg-red-500"
                } text-white`}
              >
                {problem.icon}
              </div>
              <div className="ml-4">
                <dt className="text-base sm:text-lg font-semibold leading-6">
                  {problem.title}
                </dt>
                <dd className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {problem.description}
                </dd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
