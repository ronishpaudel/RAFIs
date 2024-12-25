import React from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with mobile fallback */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 to-teal-900 sm:bg-none">
        {/* Desktop background image - only loaded on sm: breakpoint and above */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/static/img/banner.webp"
            alt="Hero background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeDR0fIR4hHRsdHR0dISEhHSEhHR0hISEhISEhISEhISEhISEhISEhISH/2wBDARUXFyAeIB4gHiAeICEgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements - only shown on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block"
      >
        <div className="absolute top-20 right-20">
          <Leaf className="w-16 h-16 text-emerald-300" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Leaf className="w-12 h-12 text-emerald-300 rotate-45" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6">
          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-poppins text-emerald-300 font-medium tracking-wider uppercase"
          >
            Welcome to Regro Foods
          </motion.p>

          {/* Animated heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-libre font-bold text-white tracking-tight"
          >
            Eat Healthy,{" "}
            <span className="block mt-2">
              Stay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400">
                Healthy
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 leading-relaxed"
          >
            Discover our range of quality food products for a healthier you. We
            provide premium ingredients and sustainable agricultural solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="/products"
              className="group inline-flex items-center px-6 py-3 rounded-lg 
                       bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600
                       text-white font-poppins text-sm sm:text-base font-semibold
                       transition-all duration-300 
                       shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105
                       hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700"
            >
              Explore Our Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="/about"
              className="group inline-flex items-center px-6 py-3 rounded-lg 
                       bg-white/10 backdrop-blur-sm
                       text-white font-poppins text-sm sm:text-base font-semibold
                       transition-all duration-300 
                       hover:bg-white/20 hover:scale-105
                       border border-white/20 hover:border-white/30"
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-emerald-500/20"
          >
            {[
              { value: "100%", label: "Locally Sourced Ingredients" },
              { value: "0%", label: "Artificial Additives" },
              { value: "Fresh", label: "Handcrafted in Small Batches" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-300 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-6 rounded-full bg-emerald-500/20"
          >
            <div className="w-full h-1/2 bg-emerald-400/70 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
