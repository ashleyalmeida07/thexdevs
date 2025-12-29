"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader, Button } from "@/components/ui";
import { workConfig } from "@/config";
import { ProjectCard } from "./components";

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#030014]">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#8646F4]/60"></div>
            <div className="text-xs uppercase tracking-widest text-[#A073EE]">
              {workConfig.label}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              {workConfig.title}
              <br />
              <span className="text-[#8646F4]/80">{workConfig.subtitle}</span>
            </h2>
            <Button
              variant="secondary"
              className="border-2 border-[#8646F4]/40 hover:border-[#8646F4] hover:bg-[#191625] group"
            >
              View All Work
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workConfig.projects.map((project, index) => (
            <div key={index} onMouseEnter={() => setActiveIndex(index)}>
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                year={project.year}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-32 h-32 border border-[#8646F4]/20"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 border border-[#6E25ED]/30"></div>
    </section>
  );
}
