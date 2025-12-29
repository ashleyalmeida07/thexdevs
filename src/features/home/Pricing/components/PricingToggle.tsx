"use client";

interface PricingToggleProps {
  annual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingToggle({ annual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="border-2 border-[#8646F4]/40 p-1 inline-flex rounded-sm backdrop-blur-sm bg-[#6E25ED]/10">
        <button
          onClick={() => onToggle(true)}
          className={`px-6 py-2 text-sm transition-all duration-300 ${
            annual
              ? "bg-[#8646F4] text-white font-medium"
              : "text-white/70 hover:text-white"
          }`}
        >
          Annual <span className="text-xs opacity-80">(Save 20%)</span>
        </button>
        <button
          onClick={() => onToggle(false)}
          className={`px-6 py-2 text-sm transition-all duration-300 ${
            !annual
              ? "bg-[#8646F4] text-white font-medium"
              : "text-white/70 hover:text-white"
          }`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
