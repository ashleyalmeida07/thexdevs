"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card variant="hover" className="group rounded-sm">
      <div className="mb-6 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors">
        <div className="bg-[#191625] p-3 inline-block rounded-sm group-hover:bg-[#1C192C] transition-all duration-300 border border-[#8646F4]/20">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-[#918EA0] group-hover:text-white/90 transition-colors">
        {description}
      </p>
    </Card>
  );
}
