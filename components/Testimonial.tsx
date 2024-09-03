import Image from "next/image";
import { Star, StarHalf, Star as StarOutline } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "आरव शर्मा",
      image: "/static/img/batman.webp",
      text: "मैले मेरो बेकिंग आवश्यकताहरुको लागि RAFIs को पिठो प्रयोग गरिरहेको छु, र परिणामहरू अचम्मको छन्! गुणस्तर असाधारण छ, र मलाई मेरो परिवारको लागि स्वस्थ उत्पादन प्रयोग गरिरहेको थाहा पाउँदा खुशी लाग्छ।",
      rating: 4.5,
    },
    {
      name: "प्रिया पटेल",
      image: "/static/img/batman.webp",
      text: "RAFIs को अचारहरू एकदम स्वादिष्ट छन्! तिनीहरूले मेरो खानामा उत्तम तीतो स्वाद थप्छन्, र म तिनीहरू प्राकृतिक सामग्रीहरूबाट बनेको कदर गर्दछु। अत्यधिक सिफारिस गरिएको!",
      rating: 3.5,
    },
    {
      name: "राहुल सिंह",
      image: "/static/img/batman.webp",
      text: "RAFIs उत्पादनहरू हाम्रो घरको आवश्यक वस्तुहरू बनिसकेका छन्। पिठोले उत्कृष्ट रोटीहरू बनाउँछ, र अचार उत्तम संगत हो। यो स्वास्थ्यको ख्याल राख्ने स्थानीय व्यवसायलाई समर्थन गर्न उत्कृष्ट हो।",
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className="h-5 w-5 text-yellow-400 fill-current"
          />
        ))}
        {halfStar && (
          <StarHalf className="h-5 w-5 text-yellow-400 fill-current" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOutline
            key={`empty-${i}`}
            className="h-5 w-5 text-gray-300 dark:text-gray-600 fill-current"
          />
        ))}
      </>
    );
  };

  return (
    <section id="testimonials" className="my-6 py-16 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
          हाम्रा ग्राहकहरूको अनुभव
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={
                    testimonial.image ||
                    "https://www.gravatar.com/avatar/ae6e432354d3da4ea712b063bb35f021?d=mp&r=g&s=50"
                  }
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mb-4"
                />
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <div className="flex justify-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
