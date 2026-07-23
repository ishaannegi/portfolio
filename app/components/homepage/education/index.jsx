"use client";
import { educations } from "@/utils/data/educations";
import { motion } from "framer-motion";

function Education() {
  return (
    <div id="education" className="my-16 lg:my-32 mx-auto max-w-[680px] border-t border-border-clean pt-16">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Credentials</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          Academic <span className="text-accent-blue">education</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {
          educations.map((education, idx) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              className="group border-l-2 border-transparent hover:border-accent-blue transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 py-6 pl-4 pr-2">
                <div className="text-sm font-mono text-text-secondary min-w-[120px] pt-0.5">
                  {education.duration}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary leading-snug">
                    {education.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>
              {idx < educations.length - 1 && (
                <div className="border-b border-border-clean/60 ml-4" />
              )}
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Education;