import React, { useRef, useEffect, useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuVariants: Variants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const menuItems: string[] = ["About", "Products", "Advantages", "Contact"];

  const productCategories: string[] = ["Flour", "Pickles"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 bg-gradient-to-br from-primary/20 to-background backdrop-blur-lg z-50 flex flex-col"
        >
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-primary hover:bg-primary/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 p-4 bg-white opacity-90 dark:bg-gray-950">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                variants={linkVariants}
                transition={{ delay: index * 0.1 }}
              >
                {item === "Products" ? (
                  <div className="flex flex-col items-center">
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-2 text-xl font-semibold"
                      onClick={toggleProducts}
                    >
                      <span>{item}</span>
                      {isProductsOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4 space-y-3"
                        >
                          {productCategories.map((category) => (
                            <div key={category}>
                              <NavLink
                                href={`/products/${category.toLowerCase()}`}
                              >
                                {category}
                              </NavLink>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink href={`${item.toLowerCase()}`}>{item}</NavLink>
                )}
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MobileMenu };
