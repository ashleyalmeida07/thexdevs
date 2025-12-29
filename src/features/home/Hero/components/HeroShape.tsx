"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroConfig } from "@/config";

const { shapeAnimationDelay } = heroConfig;

export const HeroShape = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: shapeAnimationDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background shape */}
        <motion.div
          className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-[#8646F4]/30 bg-[#191625]/20 z-[-1]"
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.8,
            delay: shapeAnimationDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ transform: "translateZ(-20px)" }}
        ></motion.div>

        {/* Main square container */}
        <motion.div
          className="aspect-square relative overflow-hidden border border-[#8646F4]/40"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: shapeAnimationDelay + 0.1,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#6E25ED]/40 to-[#191625]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: shapeAnimationDelay + 0.2 }}
          ></motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-3/4 h-3/4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: shapeAnimationDelay + 0.3 }}
            >
              {/* Four lines - animate in sequence with purple accent */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-[#8646F4]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.4 }}
              ></motion.div>
              <motion.div
                className="absolute bottom-0 right-0 w-full h-1 bg-[#8646F4]"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute top-0 right-0 h-full w-1 bg-[#8646F4]"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.6 }}
              ></motion.div>
              <motion.div
                className="absolute bottom-0 left-0 h-full w-1 bg-[#8646F4]"
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.7 }}
              ></motion.div>

              {/* Center logo */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-[#8646F4]/50 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: shapeAnimationDelay + 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <motion.div
                  className="w-3/4 h-3/4 bg-[#030014]/80 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: shapeAnimationDelay + 0.9,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: shapeAnimationDelay + 1.0,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <Image 
                      src="/xdevs.jpeg" 
                      alt="THE xDEVS Logo" 
                      width={120} 
                      height={120}
                      className="rounded-lg"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

HeroShape.displayName = "HeroShape";
