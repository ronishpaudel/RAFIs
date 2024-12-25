import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900 dark:to-orange-950 text-amber-900 dark:text-amber-100 py-16">
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Overview */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="/static/img/footer.png"
              alt="Company Logo"
              className="h-16 w-auto"
            />
            <p className="text-amber-800 dark:text-amber-200 text-sm text-center md:text-left">
              Crafting authentic flavors since 2024. We take pride in our
              traditional recipes and modern techniques to bring you the finest
              selection of pickles, flour products, and specialty foods.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/regronepal"
                className="text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-100 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/regronepal"
                className="text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-100 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@rafisnepal.com"
                className="text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-100 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-amber-800 dark:text-amber-200">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products/pickles"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Traditional Pickles
                </a>
              </li>
              <li>
                <a
                  href="/products/flour"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Premium Flour Products
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Vegetarian Specialties
                </a>
              </li>
              <li>
                <a
                  href="/products/pickles"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Non-Veg Delicacies
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-amber-800 dark:text-amber-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/terminal"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Quality Assurance
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                >
                  Wholesale Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-amber-800 dark:text-amber-200">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <p className="text-sm">Nepalgunj-05, Banke, Nepal</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <p className="text-sm">+977-9801222761</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <a
                  href="mailto:contact@rafisnepal.com"
                  className="text-sm hover:text-amber-600 dark:hover:text-amber-300"
                >
                  contact@rafisnepal.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <p className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-16 pt-8 border-t border-amber-200 dark:border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              © 2024 Technopoets.pvt.ltd . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
