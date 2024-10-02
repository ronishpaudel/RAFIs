import { CheckCircle, Leaf, Package, Users } from "lucide-react";

export function WhyChooseRegro() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center h-auto lg:h-[100vh] bg-green-50 overflow-hidden">
      {/* Text section */}
      <div className="relative z-20 flex items-center justify-center w-full lg:w-1/2 max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="w-full flex flex-col justify-center bg-white p-6 sm:p-10 rounded-lg shadow-lg z-30">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6 sm:mb-8">
            Why Choose Regro?
          </h2>
          <ul className="space-y-6 sm:space-y-8">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-700 mr-3 sm:mr-4" />
              <p className="text-base sm:text-lg">
                <strong>Hygienic & Nutritious:</strong> Regmi Agro & Food
                Industries Pvt. Ltd. (Regro) is committed to providing hygienic,
                nutritious, and delicious food products, ensuring the highest
                standards of quality.
              </p>
            </li>
            <li className="flex items-start">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-700 mr-3 sm:mr-4" />
              <p className="text-base sm:text-lg">
                <strong>Sustainable Practices:</strong> We source the finest
                ingredients using eco-friendly and sustainable methods to ensure
                our products are both healthy and environmentally responsible.
              </p>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-700 mr-3 sm:mr-4" />
              <p className="text-base sm:text-lg">
                <strong>Community Trust:</strong> Trusted by communities across
                Nepal, we deliver safe, affordable, and flavorful food options
                that contribute to healthier lifestyles.
              </p>
            </li>
            <li className="flex items-start">
              <Package className="w-6 h-6 sm:w-8 sm:h-8 text-green-700 mr-3 sm:mr-4" />
              <p className="text-base sm:text-lg">
                <strong>Innovative Solutions:</strong> Our diverse range of food
                products caters to the evolving tastes and needs of our
                customers, always with innovation at the core.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 h-full lg:block hidden  bg-cover bg-center"
        style={{
          backgroundImage: 'url("/static/img/banner.webp")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
    </section>
  );
}
