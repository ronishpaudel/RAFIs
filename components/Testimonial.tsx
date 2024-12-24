import React from "react";
import Image from "next/image";
import { Star, StarHalf, StarIcon as StarOutline, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    location: "Kathmandu",
    image: "/static/img/batman.webp",
    text: "The pickles are amazing! Really brings back memories of home-made achar. The quality is fantastic and their mixed vegetable pickle has become a daily staple in our meals.",
    rating: 5,
  },
  {
    name: "Priya Adhikari",
    location: "Pokhara",
    image: "/static/img/batman.webp",
    text: "Their wheat flour makes the best rotis I've ever made at home. It's so fresh and the texture is perfect. My family loves everything I make with it!",
    rating: 4.5,
  },
  {
    name: "Bikash Thapa",
    location: "Lalitpur",
    image: "/static/img/batman.webp",
    text: "The chicken pickle is outstanding! Perfect blend of spices and the quality is consistent. Great to see a local company making such premium products.",
    rating: 5,
  },
  {
    name: "Samiksha Poudel",
    location: "Bharatpur",
    image: "/static/img/batman.webp",
    text: "Their dal ko achar is simply incredible. The taste reminds me of my grandmother's recipe. Very happy to find such authentic flavors.",
    rating: 5,
  },
  {
    name: "Rajesh Maharjan",
    location: "Bhaktapur",
    image: "/static/img/batman.webp",
    text: "The mango pickle is perfectly balanced - sweet, spicy, and tangy. I appreciate how they maintain traditional tastes while ensuring good quality.",
    rating: 4.5,
  },
  {
    name: "Anjali Shrestha",
    location: "Butwal",
    image: "/static/img/batman.webp",
    text: "Their atta makes such soft rotis! I love that it's clean and well-packaged. Finally found a flour brand I can trust for my daily cooking.",
    rating: 5,
  },
];

const renderStars = (rating: number): JSX.Element => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="h-4 w-4 text-yellow-400 fill-yellow-400"
        />
      ))}
      {halfStar && (
        <StarHalf className="h-4 w-4 text-yellow-400 fill-yellow-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOutline key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="w-[280px] sm:w-[360px] flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
    <Quote className="w-8 h-8 text-green-500/30 mb-4 self-start" />
    <div className="flex items-center mb-4">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
    <div className="mb-4">{renderStars(testimonial.rating)}</div>
    <p className="text-gray-600 text-sm leading-relaxed flex-grow overflow-hidden line-clamp-4">
      {testimonial.text}
    </p>
  </div>
);

const TestimonialRow: React.FC<{
  testimonials: Testimonial[];
  direction: "left" | "right";
}> = ({ testimonials, direction }) => (
  <div
    className={`flex gap-6 ${
      direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
    }`}
  >
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))}
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
    ))}
  </div>
);

export default function Testimonials(): JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-800 mb-4">
            Our Happy Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Join hundreds of satisfied customers enjoying our authentic Nepali
            flavors
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <div className="mb-8">
            <TestimonialRow
              testimonials={testimonials.slice(0, 3)}
              direction="right"
            />
          </div>
          <div>
            <TestimonialRow
              testimonials={testimonials.slice(3)}
              direction="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
