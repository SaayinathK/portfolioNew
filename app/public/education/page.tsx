"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";
import React from "react";

interface Education {
  _id?: string;
  logo?: string;
  institution?: string;
  school?: string;
  field?: string;
  isCurrentlyEnrolled?: boolean;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  description?: string;
  activities?: string[];
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  codeComment: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, codeComment }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-white">{title}</h2>
    <p className="text-blue-300">{subtitle}</p>
    <span className="text-xs text-gray-500">{codeComment}</span>
  </div>
);

const EducationPage: React.FC = () => {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/education")
      .then((res) => res.json())
      .then((data) => {
        setEducation(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="scroll-mt-20 px-2 sm:px-0"
    >
      {loading ? (
        <div className="space-y-4 sm:space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 sm:h-40 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="relative pl-6 sm:pl-12">
          {Array.isArray(education) && education.map((edu, i) => (
            <motion.div
              key={edu._id || i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group mb-8 last:mb-0"
            >
              {/* Timeline Line Segment - connects to next dot */}
              {i < education.length - 1 && (
                <div
                  className="absolute w-0.5 bg-gradient-to-b from-blue-500 to-blue-600"
                  style={{
                    left: '-39.5px',
                    top: '45px',
                    bottom: '-45px'
                  }}
                />
              )}

              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 rounded-full bg-blue-500 border-2 border-blue-500 group-hover:bg-blue-400 group-hover:border-blue-400 transition-colors z-10" style={{ left: '-44px', top: '24px' }} />

              {/* Card */}
              <div className="rounded-2xl border border-gray-800/50 bg-black/50 backdrop-blur-sm p-3 sm:p-6 transition-all group-hover:bg-black/70 hover:border-blue-500/40 hover:shadow-[0_12px_45px_rgba(59,130,246,0.25)] hover:-translate-y-1">
                {/* Line 1: Logo on left, Degree + Field on right */}
                <div className="flex items-start gap-4 mb-3">
                  {edu.logo && (
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-10 h-10 sm:w-16 sm:h-16 object-contain rounded-lg border border-blue-400/30 bg-blue-500/10 p-1 sm:p-2 flex-shrink-0"
                      width={40}
                      height={40}
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {edu.field}
                      </h3>
                      {edu.isCurrentlyEnrolled && (
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-green-500/20 text-green-400 text-[11px] sm:text-xs font-semibold whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </div>
                    {/* Line 2: Institution */}
                    <p className="text-blue-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                      {edu.institution || edu.school || "University"}
                    </p>
                  </div>
                </div>

                {/* Line 3: Date */}
                {edu.startDate && (
                  <div className="flex items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                    <Calendar size={14} />
                    <span>
                      {new Date(edu.startDate).getFullYear()} {edu.endDate ? `- ${new Date(edu.endDate).getFullYear()}` : "- Present"}
                    </span>
                  </div>
                )}

                {/* Line 4: GPA */}
                {edu.gpa && (
                  <div className="mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                )}

                {/* Line 5: Description */}
                {edu.description && (
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                    {edu.description}
                  </p>
                )}

                {/* Line 6: Activities */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-gray-700/30">
                    <p className="text-[11px] sm:text-xs font-semibold text-gray-300 mb-1 sm:mb-2 uppercase tracking-wider">Activities</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {edu.activities.map((activity: string, idx: number) => (
                        <span key={idx} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs bg-blue-500/15 text-blue-300 border border-blue-500/20 hover:border-blue-500/50 transition-colors">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default EducationPage;