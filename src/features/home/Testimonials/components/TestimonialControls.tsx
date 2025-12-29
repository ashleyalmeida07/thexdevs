"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function TestimonialControls({
  onPrev,
  onNext,
}: TestimonialControlsProps) {
  return (
    <div className="flex justify-end mt-8 gap-4">
      <button
        onClick={onPrev}
        className="p-2 border-2 border-[#8646F4]/40 hover:border-[#8646F4] hover:bg-[#191625] transition-all duration-300 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
      </button>
      <button
        onClick={onNext}
        className="p-2 border-2 border-[#8646F4]/40 hover:border-[#8646F4] hover:bg-[#191625] transition-all duration-300 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
      </button>
    </div>
  );
}
