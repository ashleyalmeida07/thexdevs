"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import {
  FooterLogo,
  SocialLinks,
  LegalLinks,
  Copyright,
} from "./components";

const services = [
  { label: "Custom Development", href: "#features" },
  { label: "Backend & APIs", href: "#features" },
  { label: "Database Solutions", href: "#features" },
  { label: "Digital Presence", href: "#features" },
];

const quickLinks = [
  { label: "Portfolio", href: "#work" },
  { label: "Our Process", href: "#process" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030014]">
      {/* Top CTA Section */}
      <div className="border-t border-b border-[#8646F4]/30 bg-gradient-to-r from-[#191625] to-transparent">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to build something <span className="text-[#8646F4]">amazing</span>?
              </h3>
              <p className="text-[#918EA0]">Let's turn your vision into reality.</p>
            </div>
            <Link
              href="#contact"
              className="group flex items-center gap-2 bg-[#8646F4] hover:bg-[#A073EE] px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0F0C1F] py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <FooterLogo />
              <p className="text-[#918EA0] mt-4 text-sm leading-relaxed">
                Engineering intelligent, efficient, and future-ready digital solutions that create opportunities and amplify brand impact.
              </p>
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-[#918EA0] hover:text-[#A073EE] transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#918EA0] hover:text-[#A073EE] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@thexdevs.com"
                    className="text-[#918EA0] hover:text-[#A073EE] transition-colors text-sm flex items-start gap-3 group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-[#8646F4] group-hover:text-[#A073EE]" />
                    hello@thexdevs.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="text-[#918EA0] hover:text-[#A073EE] transition-colors text-sm flex items-start gap-3 group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-[#8646F4] group-hover:text-[#A073EE]" />
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#8646F4] flex-shrink-0" />
                  <span className="text-[#918EA0] text-sm">
                    Ready to serve globally
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#8646F4]/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <Copyright />
            <LegalLinks />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8646F4]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-48 h-48 bg-[#6E25ED]/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
