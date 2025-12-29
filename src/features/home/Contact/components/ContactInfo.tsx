"use client";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Card } from "@/components/ui";
import { contactConfig } from "@/config";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="bg-[#6E25ED]/30 p-2 rounded-sm mr-4">{icon}</div>
      <div>
        <div className="text-sm uppercase tracking-widest text-[#A073EE] mb-2">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

export function ContactInfo() {
  const { info } = contactConfig;

  return (
    <Card className="h-full">
      <h3 className="text-2xl font-bold mb-6 text-white">
        Contact Information
      </h3>
      <div className="space-y-8">
        <ContactItem
          icon={<Mail className="w-5 h-5 text-[#A073EE]" />}
          label="Email"
        >
          <a
            href={`mailto:${info.email}`}
            className="text-white hover:text-[#A073EE] transition-colors"
          >
            {info.email}
          </a>
        </ContactItem>

        <ContactItem
          icon={<Phone className="w-5 h-5 text-[#A073EE]" />}
          label="Phone"
        >
          <a
            href={`tel:${info.phone.replace(/\s/g, "")}`}
            className="text-white hover:text-[#A073EE] transition-colors"
          >
            {info.phone}
          </a>
        </ContactItem>

        <ContactItem
          icon={<MapPin className="w-5 h-5 text-[#A073EE]" />}
          label="Address"
        >
          <address className="not-italic text-white/80">
            {info.address.street}
            <br />
            {info.address.city}
            <br />
            {info.address.country}
          </address>
        </ContactItem>

        <div>
          <div className="text-sm uppercase tracking-widest text-[#A073EE] mb-3">
            Social
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#6E25ED]/30 p-2 rounded-sm hover:bg-[#8646F4]/40 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
            </a>
            <a
              href="#"
              className="bg-[#6E25ED]/30 p-2 rounded-sm hover:bg-[#8646F4]/40 transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
            </a>
            <a
              href="#"
              className="bg-[#6E25ED]/30 p-2 rounded-sm hover:bg-[#8646F4]/40 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#A073EE] group-hover:text-[#CBB3F3] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
