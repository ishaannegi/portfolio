"use client";
import { experiences } from "@/utils/data/experience";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div id="experience" className="my-16 lg:my-32 mx-auto max-w-[680px] border-t border-border-clean pt-16">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Employment</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          Professional <span className="text-accent-blue">experience</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {
          experiences.map((experience, idx) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              className="group border-l-2 border-transparent hover:border-accent-blue transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 py-6 pl-4 pr-2">
                <div className="text-sm font-mono text-text-secondary min-w-[120px] pt-0.5">
                  {experience.duration}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary leading-snug">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {experience.company}
                  </p>
                </div>
              </div>
              {idx < experiences.length - 1 && (
                <div className="border-b border-border-clean/60 ml-4" />
              )}
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Experience;