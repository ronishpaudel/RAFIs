"use client";

import { Menu, X, Sun, Moon, Search } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { NavLink } from "./NavLink";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { push } = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => push("/")}
          >
            <span className="text-2xl font-bold text-primary dark:text-green-400">
              RAFIs
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="#advantages">Advantages</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 transition-all duration-300 ease-in-out">
                  <Input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 pr-8"
                    onChange={(e) => onSearch(e.target.value)}
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={toggleSearch}>
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
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
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="bg-background h-full w-64 p-4 float-right">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="mb-4"
            >
              <X className="h-6 w-6" />
            </Button>
            <nav className="flex flex-col space-y-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#advantages">Advantages</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
