"use client";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Leaf, XCircle, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";

export default function AdvantagesPage() {
  const advantages = [
    {
      title: "Healthier Lifestyle",
      problem: "Processed foods with artificial additives",
      solution: "Natural, organic products for better health",
      icon: <Heart className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Support Local Economy",
      problem: "Mass-produced goods from distant sources",
      solution: "Locally sourced products supporting community growth",
      icon: <Home className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Environmental Sustainability",
      problem: "Excessive packaging and long-distance transportation",
      solution: "Eco-friendly packaging and reduced carbon footprint",
      icon: <Leaf className="w-12 h-12 text-teal-500" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Health Enthusiast",
      content:
        "Regro has transformed my eating habits. Their organic products are not only delicious but have significantly improved my overall well-being.",
      avatar: "",
    },
    {
      name: "Michael Chen",
      role: "Local Business Owner",
      content:
        "As a small business owner, I appreciate Regro's commitment to supporting the local economy. Their partnership has been invaluable to our community.",
      avatar: "",
    },
    {
      name: "Emily Rodriguez",
      role: "Environmental Activist",
      content:
        "Regro's dedication to sustainability is commendable. Their eco-friendly packaging and locally sourced products align perfectly with my values.",
      avatar: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Advantages of Choosing Regro
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">{advantage.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
                  {advantage.title}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400">
                      {advantage.problem}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400">
                      {advantage.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Why Choose Regro?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We carefully select and test all our products to ensure the
                  highest quality and freshness.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our dedicated team is committed to providing excellent
                  customer service and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.name}`}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
