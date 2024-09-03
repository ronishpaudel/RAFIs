import * as React from "react";
import { AlertCircle, Frown, Heart, XCircle, Meh } from "lucide-react";
import { useTheme } from "next-themes";

export function ProblemsSection() {
  const { theme } = useTheme();

  const problems = [
    {
      title: "Lack of Essential Nutrients",
      description:
        "Unhealthy food often lacks the essential vitamins and minerals that your body needs to function properly.",
      icon: <AlertCircle className="w-6 h-6" />,
    },
    {
      title: "Poor Digestive Health",
      description:
        "Foods high in refined sugars, unhealthy fats, and low in fiber can lead to digestive problems such as constipation and bloating.",
      icon: <Frown className="w-6 h-6" />,
    },
    {
      title: "Weakens the Immune System",
      description:
        "A diet rich in unhealthy food can suppress your immune system, making you more susceptible to illnesses.",
      icon: <XCircle className="w-6 h-6" />,
    },
    {
      title: "Increases Risk of Heart Disease",
      description:
        "High consumption of unhealthy fats and sugars can lead to increased cholesterol levels and blood pressure, increasing the risk of heart disease.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Leads to Weight Gain",
      description:
        "Unhealthy foods are often high in calories and low in nutrients, which can lead to overeating and weight gain.",
      icon: <Meh className="w-6 h-6" />,
    },
  ];

  return (
    <div
      className={`py-12 ${
        theme === "dark"
          ? "bg-gray-950 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-green-600">
            Problems with Unhealthy Food
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Understanding the Risks of Poor Dietary Choices
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Unhealthy food can have serious consequences for your body and mind.
            Here are some of the key problems associated with a poor diet.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {problems.map((problem, index) => (
            <div key={index} className="relative flex items-start">
              <div
                className={`flex items-center justify-center rounded-md ${
                  theme === "dark" ? "bg-red-600" : "bg-red-500"
                } text-white`}
              >
                {problem.icon}
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium">
                  {problem.title}
                </dt>
                <dd className="mt-2 text-base">{problem.description}</dd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
