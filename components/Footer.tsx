import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img src="/static/img/footer.png" alt="Rafis Logo" />

            <p className="mt-4 text-green-600 dark:text-green-200 text-sm mb-4 text-center md:text-left">
              Regro's are committed to sustainable practices and innovative
              solutions, with the source of the finest ingredients to create a
              diverse range of food products that cater to the evolving tastes
              and needs of our customers.
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              Nepalgunj City, Nepal
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-500 dark:hover:text-green-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-green-500 dark:hover:text-green-400 transition duration-300"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/advantages"
                  className="hover:text-green-500 dark:hover:text-green-400 transition duration-300"
                >
                  Health Benefits
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://www.facebook.com/regronepal"
                className="text-green-600 hover:text-green-400 dark:text-green-300 dark:hover:text-green-100 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/regronepal"
                className="text-green-600 hover:text-green-400 dark:text-green-300 dark:hover:text-green-100 transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/regronepal"
                className="text-green-600 hover:text-green-400 dark:text-green-300 dark:hover:text-green-100 transition duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:contact@rafisnepal.com"
                className="hover:underline text-green-600 dark:text-green-300"
              >
                contact@rafisnepal.com
              </a>
            </p>
            <p className="text-green-700 dark:text-green-200">
              Phone: +977-9801222762, +977-9801222763
            </p>
            <p className="mt-2 text-green-700 dark:text-green-200">
              Address: Nepalgunj-05, Banke, Nepal
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.rafisnepal.com"
                className="hover:underline text-green-600 dark:text-green-300"
              >
                www.rafisnepal.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-200 dark:border-green-700 text-center">
          <p className="text-green-700 dark:text-green-200">
            &copy; 2024 Regmi Agro & Food Industries Pvt. Ltd. (regro). All
            rights reserved.
          </p>
          <div className="text-sm mt-2 text-green-600 dark:text-green-300 ">
            Technical Partner:
            <a
              href="https://technopoets.com/"
              className="hover:underline cursor-pointer"
            >
              {" "}
              TechnoPoets Pvt. Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
