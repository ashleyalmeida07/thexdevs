"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui";

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  cta: string;
  popular: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  annual: boolean;
}

export function PricingCard({ plan, annual }: PricingCardProps) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      className={`border-2 ${
        plan.popular ? "border-[#8646F4]" : "border-[#8646F4]/30"
      } p-8 relative bg-[#191625] backdrop-blur-sm group hover:bg-[#1C192C] transition-all duration-300`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-[#8646F4] text-white text-xs uppercase tracking-widest py-1 px-3 -mt-3 -mr-3 font-medium">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
      <p className="text-white/70 mb-6">{plan.description}</p>
      <div className="mb-6 flex items-baseline">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-white/70 ml-2">
          {annual ? "/year" : "/month"}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start group">
            <Check className="w-5 h-5 mr-2 text-[#A073EE] group-hover:text-[#CBB3F3] flex-shrink-0 mt-0.5 transition-colors duration-300" />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={plan.popular ? "primary" : "outline"}
        className={`w-full ${
          plan.popular
            ? ""
            : "border-2 border-[#8646F4]/50 hover:border-[#8646F4] hover:bg-[#191625]"
        }`}
      >
        {plan.cta}
      </Button>

      {plan.popular && (
        <div className="absolute inset-0 border-b-2 border-[#8646F4] opacity-20"></div>
      )}
    </div>
  );
}
