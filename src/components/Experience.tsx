"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Briefcase, FileBadge } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Crew Member",
    company: "McDonald's UK",
    date: "2023 – Present",
    description: [
      "Identified disposal patterns by tracking product waste over time, reducing wastage by 20% through operational variance analysis.",
      "Improved accuracy rate from 85% to 98% by tracking non-conformances and recurring product issues, reporting to the leadership team.",
      "Reduced service time from 190 to 140 seconds by analysing workflow bottlenecks and coordinating task sequencing."
    ],
    focus: ["Variance Analysis", "Process Optimization", "Workflow Analysis", "Team Coordination", "Performance Tracking"],
    proofs: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Experience" 
          subtitle="Professional history and operations roles."
        />

        <div className="relative">
          {/* Spatial Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] opacity-80 shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-start`}>
                
                {/* Glowing Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-1.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] border border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full" />
                </div>

                <div className="w-full pl-20 md:pl-0 md:w-1/2 relative">
                  <div className={`md:px-12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <GlassCard delay={idx * 0.2} className="p-6 sm:p-8 text-left">
                      
                      <div className="flex items-center gap-2 text-[#06B6D4] text-sm font-bold tracking-wider uppercase mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#F9FAFB] mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-[#9CA3AF] font-medium mb-6">{exp.company}</h4>
                      
                      <div className="space-y-2 mb-6 text-[#9CA3AF] text-sm">
                        {exp.description.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                            <p>{bullet}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mb-8">
                        <h5 className="text-sm font-bold text-[#F9FAFB] uppercase tracking-wider">Key Focus</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.focus.map((f, fIdx) => (
                            <span key={fIdx} className="tech-pill px-3 py-1 rounded-full text-xs font-mono">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      {exp.proofs.length > 0 && (
                        <div className="border-t border-white/10 pt-6">
                          <h5 className="text-sm font-bold text-[#F9FAFB] uppercase tracking-wider mb-4">Proof Assets</h5>
                          <div className="flex flex-wrap gap-3">
                            {exp.proofs.map((proof, pIdx) => (
                              <motion.a
                                key={pIdx}
                                href={proof.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-[#3B82F6] font-medium transition-colors"
                              >
                                <FileBadge className="w-4 h-4" />
                                {proof.label}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      )}

                    </GlassCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
