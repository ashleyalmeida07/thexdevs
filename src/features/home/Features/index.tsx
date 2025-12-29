"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { featuresConfig } from "@/config";
import { useFeaturesAnimation } from "./hooks";
import { FeatureCard } from "./components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// Generate stars configuration only on client side to avoid hydration mismatch
function generateStars() {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 12 + Math.random() * 10,
    size: 1 + Math.random() * 1.5,
    opacity: 0.5 + Math.random() * 0.5,
  }));
}

export function Features() {
  const { sectionRef, isInView } = useFeaturesAnimation();
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([]);

  // Generate stars only on client side to prevent hydration mismatch
  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-4 mt-20 sm:mt-0 sm:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #030014 0%, #0F0C1F 50%, #030014 100%)",
      }}
    >
      {/* Floating Stars Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white"
            style={{
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.3)`,
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-50px",
              opacity: [0, star.opacity, star.opacity, 0],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={featuresConfig.label}
          title={featuresConfig.title}
          subtitle={featuresConfig.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresConfig.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8646F4]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#A073EE]/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
