"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Award, ShieldCheck, MonitorPlay, CloudCog } from "lucide-react";
import { motion } from "framer-motion";

const featuredCerts = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    icon: <Award className="w-8 h-8 text-[#3B82F6]" />,
    file: null
  }
];

const supportingCerts = [
  { name: "Python Data Structures", file: "/proofs/python data structures.pdf" },
  { name: "Data Scientist Toolbox", file: "/proofs/data scientist toolbox.pdf" },
  { name: "Networks & Cisco Devices", file: "/proofs/Networks & Cisco Devices_posted.pdf" },
  { name: "Google Data Analytics", file: "/proofs/google data analytics_posted.pdf" },
  { name: "Security Risk Management", file: "/proofs/playitsafe.pdf" }
];

export function CertificationsGallery() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Verified Learning" 
          subtitle="Professional credentials and hackathon participation validating my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCerts.map((cert, idx) => {
            const cardContent = (
              <>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm text-[#06B6D4] font-medium tracking-wide uppercase">{cert.issuer}</p>
                </div>
              </>
            );

            if (cert.file) {
              return (
                <a 
                  key={idx} 
                  href={cert.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block group cursor-pointer focus:outline-none"
                >
                  <GlassCard className="p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-4 h-full hover:border-[#3B82F6]/50 transition-colors" delay={idx * 0.1}>
                    {cardContent}
                    <span className="text-xs font-mono text-[#3B82F6] opacity-75 group-hover:opacity-100 transition-opacity mt-2">
                      View Certificate →
                    </span>
                  </GlassCard>
                </a>
              );
            }

            return (
              <GlassCard key={idx} className="p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-4 h-full" delay={idx * 0.1}>
                {cardContent}
              </GlassCard>
            );
          })}
        </div>


      </div>
    </section>
  );
}
