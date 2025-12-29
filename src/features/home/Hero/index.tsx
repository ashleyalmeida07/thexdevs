"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  HeroAnimated,
  TextStagger,
  AnimatedContainer,
} from "@/components/ui/hero-animated";
import { ShadcnButton } from "@/components/ui/shadcn-button";
import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background";

export function Hero() {
  return (
    <HeroAnimated className="relative space-y-6 px-6 py-12 md:px-10 lg:px-12">
      {/* Animated Shader Background */}
      <AnimatedShaderBackground className="opacity-70" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
        {/* Badge - Pill Style */}
        <AnimatedContainer transition={{ delay: 0.1 }}>
          <div className="inline-flex items-center gap-3 bg-[#0d0b14] border border-[#2a2640] rounded-full px-5 py-2.5 shadow-lg">
            <span className="text-[#c4b5fd] text-sm font-medium">
              Launch Your Digital Vision with Us
            </span>
          </div>
        </AnimatedContainer>

        {/* Main Title */}
        <TextStagger
          className="text-5xl font-bold tracking-tight md:text-6xl lg:text-8xl text-white"
          text="Build. Scale. Succeed."
        />

        {/* Subtitle with gradient */}
        <AnimatedContainer className="mx-auto max-w-3xl" transition={{ delay: 0.3 }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#918EA0] mb-6">
            We Build <span className="text-[#A073EE] font-normal">Digital Experiences</span>
          </h2>
          <p className="text-base md:text-lg text-[#918EA0] max-w-2xl mx-auto leading-relaxed">
            Building exceptional digital experiences with cutting-edge technology.
            We transform ideas into powerful, scalable solutions.
          </p>
        </AnimatedContainer>

        {/* CTA Buttons */}
        <AnimatedContainer
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          transition={{ delay: 0.5 }}
        >
          <Link href="#features">
            <ShadcnButton 
              size="lg" 
              variant="default" 
              className="bg-[#8646F4] hover:bg-[#7035E0] text-white px-8 py-6 text-sm uppercase tracking-widest font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShadcnButton>
          </Link>
          <Link href="#mission-vision">
            <ShadcnButton
              size="lg"
              variant="outline"
              className="bg-transparent border border-[#8646F4] text-[#A073EE] hover:bg-[#8646F4] hover:text-white px-8 py-6 text-sm uppercase tracking-widest font-medium"
            >
              Our Vision
            </ShadcnButton>
          </Link>
        </AnimatedContainer>
      </div>
    </HeroAnimated>
  );
}
