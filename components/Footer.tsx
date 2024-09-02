import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-500 dark:bg-green-600 text-gray-900 py-8  dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">RAFIs</h3>
            <p>Shop Healthy, Stay Happy</p>{" "}
            <p className="text-gray-800 text-sm">
              RAFIs is situated in the central Location of Nepalgunj City. We
              provide quality food products and we have involvement in
              Agriculture as well.We aim to provide healthy food options and
              encourage healthy living.
            </p>
            <p className="mt-2">Nepalgunj City, Nepal</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:underline">
                  Health Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/regronepal"
                className="hover:text-green-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/regronepal"
                className="hover:text-green-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/regronepal"
                className="hover:text-green-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:contact@rafisnepal.com"
                className="hover:underline"
              >
                contact@rafisnepal.com
              </a>
            </p>
            <p>Phone: +977-9801222762, +977-9801222763</p>
            <p className="mt-2">Nepalgunj-05, Banke, Nepal</p>
            <p>
              Website:{" "}
              <a href="https://www.rafisnepal.com" className="hover:underline">
                www.rafisnepal.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-600 text-center">
          <p>
            &copy; 2024 Regmi Agro & Food Industries Pvt. Ltd. (regro). All
            rights reserved.
          </p>
          <p className="text-sm mt-2">
            Technical Partner: TechnoPoets Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
