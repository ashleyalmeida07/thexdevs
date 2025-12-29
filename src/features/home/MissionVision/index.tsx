"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #030014 0%, #0F0C1F 50%, #030014 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label="Mission & Vision"
          title="Driving Digital"
          subtitle="Transformation"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg md:text-xl text-[#918EA0] max-w-3xl mx-auto mb-16"
        >
          Driving digital transformation and empowering businesses with innovative technology
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border-2 border-[#8646F4]/30 bg-[#191625] p-8 md:p-10 hover:border-[#8646F4]/60 hover:bg-[#1C192C] transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="bg-[#191625] border border-[#8646F4]/20 p-4 inline-block rounded-sm mb-6 group-hover:bg-[#1C192C] transition-all duration-300">
              <Target className="w-8 h-8 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>

            {/* Decorative line */}
            <div className="h-px w-16 bg-[#8646F4]/60 mb-6"></div>

            {/* Description */}
            <p className="text-[#918EA0] text-base md:text-lg leading-relaxed group-hover:text-white/90 transition-colors">
              To empower businesses with smart, reliable, and innovative software solutions that accelerate growth and digital transformation.
            </p>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#8646F4]/20 group-hover:border-[#8646F4]/40 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#8646F4]/20 group-hover:border-[#8646F4]/40 transition-colors"></div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border-2 border-[#8646F4]/30 bg-[#191625] p-8 md:p-10 hover:border-[#8646F4]/60 hover:bg-[#1C192C] transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="bg-[#191625] border border-[#8646F4]/20 p-4 inline-block rounded-sm mb-6 group-hover:bg-[#1C192C] transition-all duration-300">
              <Eye className="w-8 h-8 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Vision
            </h3>

            {/* Decorative line */}
            <div className="h-px w-16 bg-[#8646F4]/60 mb-6"></div>

            {/* Description */}
            <p className="text-[#918EA0] text-base md:text-lg leading-relaxed group-hover:text-white/90 transition-colors">
              To become a trusted technology partner for startups and enterprises by consistently delivering high-quality, future-focused IT solutions.
            </p>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#8646F4]/20 group-hover:border-[#8646F4]/40 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#8646F4]/20 group-hover:border-[#8646F4]/40 transition-colors"></div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-[#8646F4]/60"></div>
          <span className="text-[#A073EE] text-sm uppercase tracking-widest">Innovation • Excellence • Partnership</span>
          <div className="h-px w-16 bg-[#8646F4]/60"></div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#8646F4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#6E25ED]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
