"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { Lightbulb, Users, Target, Rocket } from "lucide-react";

const approachItems = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Innovative solutions that push boundaries while solving real problems.",
  },
  {
    icon: Target,
    title: "Strong Engineering",
    description: "Clean code, robust architecture, and best practices at every step.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "Working closely with you to understand challenges and goals.",
  },
  {
    icon: Rocket,
    title: "Results-Driven",
    description: "Delivering products that drive real, measurable business outcomes.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030014] to-[#0F0C1F]">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label="Our Approach"
          title="How We Think"
          subtitle="& Work"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              We combine creative thinking, strong engineering principles, and practical industry knowledge to design and develop solutions that are both <span className="text-[#8646F4] font-semibold">impactful</span> and <span className="text-[#8646F4] font-semibold">sustainable</span>.
            </p>
            <p className="text-lg text-[#918EA0] leading-relaxed">
              From idea to execution, we work closely with our clients to understand their challenges, translate business goals into technical solutions, and deliver products that drive real results.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-px w-16 bg-[#8646F4]/60"></div>
              <span className="text-[#A073EE] text-sm uppercase tracking-widest">Client-Centric • Future-Ready • Quality-Driven</span>
            </motion.div>
          </motion.div>

          {/* Right side - Approach items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approachItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-2 border-[#8646F4]/30 bg-[#191625] p-6 hover:border-[#8646F4]/60 hover:bg-[#1C192C] transition-all duration-300 group"
              >
                <div className="bg-[#191625] border border-[#8646F4]/20 p-3 inline-block rounded-sm mb-4 group-hover:bg-[#1C192C] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#918EA0] text-sm group-hover:text-white/90 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#8646F4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#6E25ED]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
