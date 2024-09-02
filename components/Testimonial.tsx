import Image from "next/image";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      image: "/placeholder",
      text: "I've been using RAFIs flour for my baking needs, and the results are amazing! The quality is unmatched, and I love knowing I'm using a healthy product for my family.",
    },
    {
      name: "Priya Patel",
      image: "/placeholder",
      text: "The pickles from RAFIs are absolutely delicious! They add the perfect tangy flavor to my meals, and I appreciate that they're made with natural ingredients. Highly recommended!",
    },
    {
      name: "Rahul Singh",
      image: "/placeholder",
      text: "RAFIs products have become a staple in our household. The flour makes great rotis, and the pickles are a perfect accompaniment. It's great to support a local business that cares about health.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const TestimonialCard = ({ testimonial }: any) => (
    <Card className="h-full bg-gray-100 dark:bg-gray-900 ">
      <CardHeader>
        <div className="flex items-center mb-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-primary dark:text-gray-100">
              {testimonial.name}
            </h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground dark:text-gray-400">
          {testimonial.text}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section id="testimonials" className="py-16 bg-background dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary dark:text-gray-100">
          What Our Customers Say
        </h2>
        {isMobile ? (
          <Carousel className="w-full max-w-full mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
