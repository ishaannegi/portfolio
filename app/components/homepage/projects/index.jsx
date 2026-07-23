"use client";
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id='projects' className="my-16 lg:my-32 border-t border-border-clean pt-16 mx-auto max-w-[680px]">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Selected Works</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          Featured <span className="text-accent-blue">projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {projectsData.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard project={project} index={index + 1} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;