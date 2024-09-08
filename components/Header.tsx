import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { useRouter } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/utils/ThemeToggle";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { push } = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50 transition-colors duration-300 ">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer max-w-[125px] w-full h-20"
            onClick={() => push("/")}
          >
            <img
              src="/static/img/Rafis.png"
              alt="logo"
              className="w-full object-cover mb-6 
  dark:brightness-150 dark:drop-shadow-md"
            />
          </div>
          <nav className="hidden md:flex space-x-6 p-2 rounded-lg">
            <NavLink href="/about">About</NavLink>
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="flex items-center space-x-1">
                <NavLink href="/products">Products</NavLink>
                <ChevronDown className="h-4 w-4" />
              </div>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute flex flex-col top-full left-0 mt-2 w-48 bg-white dark:bg-black rounded-lg shadow-lg"
                  >
                    <a
                      href="/products/flour"
                      className="block px-4 py-2 text-base hover:bg-primary/10"
                    >
                      Flour
                    </a>
                    <a
                      href="/products/pickles"
                      className="block px-4 py-2 text-base hover:bg-primary/10"
                    >
                      Pickles
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink href="/advantages">Advantages</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
    </header>
  );
}
