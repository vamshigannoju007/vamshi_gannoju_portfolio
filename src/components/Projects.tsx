"use client";

import React from 'react';
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { Network, Lock, Database, Bot, FileCode2 } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Restaurant Performance BI Model",
    icon: <Database className="w-8 h-8 text-[#3B82F6]" />,
    description: [
      "Built scalable ETL pipelines from Toast, R365 and HubSpot into Analytics data warehouse, transforming 1M+ rows for Power BI.",
      "Created reusable SQL audit framework with clean efficient code, validating row counts, keys, dates, grain and business rules.",
      "Exposed hidden profit drain by building executive prime-cost dashboard for regional store performance analysis, pinpointing one store at 84% prime cost from 56% labour.",
      "Exposed blind digital marketing metrics by building executive ROI % measure for the marketing team, revealing -94% ROI and a major misallocated investment.",
      "Engineered 700-line Claude AI prompts for 8 fact and 7 dim tables, embedding inaccuracies to replicate real world data issues."
    ],
    architecture: "Toast/R365/HubSpot → Python ETL → PostgreSQL → Power BI Dashboard",
    tech: ["Power BI", "SQL", "PostgreSQL", "Python", "ETL"],
    link: "https://github.com/vamshigannoju007/Restaurant_Performance_Model"
  },
  {
    title: "Superstore Performance Dashboard",
    icon: <Network className="w-8 h-8 text-[#06B6D4]" />,
    description: [
      "Exposed hidden profit erosion by building DAX measure for leakage analysis, uncovering 33% overall leakage and a 39% worst-store impact.",
      "Identified deadweight products by filtering gross sales dashboard, exposing GoodDay Biscuit at 25% Gross Profit and only 0.6K sales.",
      "Created the star schema of fact sales table with the dimension tables and used the Power Query for data manipulation like building date table."
    ],
    architecture: "Raw Data → Power Query → Star Schema → DAX Measures → Dashboard",
    tech: ["Power BI", "DAX", "SQL", "Power Query"],
    link: "https://github.com/vamshigannoju007/Superstore-"
  },
  {
    title: "E-Commerce Sales Performance Dashboard",
    icon: <FileCode2 className="w-8 h-8 text-[#8B5CF6]" />,
    description: [
      "Diagnosed margin erosion by category and discount band, exposing Office Supplies at 17.1% and high discount profit at $3,297.",
      "Built 8 pivot tables across region, category, segment, monthly trends, products, discounts, and payments, slicing 2,000 orders analytically.",
      "Engineered 7 data quality checks for duplicates, blanks, dates, quantities, discounts, sales, and profit, validating raw data before analysis."
    ],
    architecture: "Raw CSV → Excel Pivot Tables → Interactive Dashboard",
    tech: ["Excel", "Pivot Tables", "Data Visualization", "VLOOKUP"],
    link: "https://github.com/vamshigannoju007/Advanced-Excel-Project"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Complex data models, ETL pipelines, and BI dashboards."
        />

        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <GlassCard key={idx} className="p-0 overflow-hidden group" delay={idx * 0.1}>
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Content Area */}
                <div className="w-full lg:w-[45%] p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                        {project.icon}
                      </div>
                      <h3 className="text-3xl font-extrabold text-[#F9FAFB] tracking-tight">{project.title}</h3>
                    </div>
                    
                    <div className="space-y-3 mb-8 text-[#9CA3AF]">
                      {project.description.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                          <p className="text-base leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-pill px-3 py-1 text-sm rounded-full font-mono">
                          {t}
                        </span>
                      ))}
                    </div>

                    <MagneticButton variant="glass" className="w-fit" href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-5 h-5" />
                      View Source
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Architecture Area */}
                <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-12 bg-black/40 flex items-center justify-center relative overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 w-full glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                      <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                      <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                      <span className="ml-2 text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">Architecture Flow</span>
                    </div>
                    <div className="p-4 sm:p-6 bg-[#0B0F19] rounded-xl border border-white/5">
                      <code className="text-[#38bdf8] font-mono text-xs sm:text-sm md:text-base leading-loose block break-words">
                        {project.architecture.split(' → ').map((step, i, arr) => (
                          <React.Fragment key={i}>
                            <span className="text-[#F9FAFB]">{step}</span>
                            {i < arr.length - 1 && <span className="text-[#9CA3AF] mx-2">→</span>}
                          </React.Fragment>
                        ))}
                      </code>
                    </div>
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
