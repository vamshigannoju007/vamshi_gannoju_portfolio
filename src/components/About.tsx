"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Target, Cpu, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="About Me" 
          subtitle="Data Analyst combining statistical analysis expertise with scalable business intelligence solutions."
        />

        <div className="grid md:grid-cols-12 gap-8">
          <GlassCard className="md:col-span-7 p-6 sm:p-8 md:p-10" delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Code2 className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">Background</h3>
            </div>
            <div className="space-y-6 text-[#9CA3AF] leading-relaxed text-lg font-medium">
              <p>
                I am a Data Analyst with a strong background in statistical analysis, holding an MSc in Biotechnology from the University of Salford. I enjoy transforming raw business and research data into actionable insights through analytics, visualization, and data-driven decision making.
              </p>
              <p>
                I have applied Python scripting to process complex datasets, clean structured files, run statistical analysis, and interpret research datasets through A/B testing, regression, p-values, and correlation.
              </p>
              <p>
                My goal is to leverage my skills in Power BI, SQL, Advanced Excel, and Python to build scalable pipelines and executive dashboards that expose hidden profit drains, improve ROI, and validate data integrity.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-5 p-6 sm:p-8 md:p-10" delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Target className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">Current Focus</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Power BI Dashboards",
                "SQL ETL Pipelines",
                "Statistical Analysis",
                "Data Wrangling & Cleaning",
                "A/B Testing & Regression"
              ].map((focus, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-white/5 rounded border border-white/10">
                    <Cpu className="w-4 h-4 text-[#06B6D4]" />
                  </div>
                  <span className="text-[#F9FAFB] font-medium leading-snug">{focus}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
