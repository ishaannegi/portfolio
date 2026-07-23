import React from 'react';
import SpotlightCard from '../../helper/spotlight-card';

function ProjectCard({ project, index }) {
  // Grab the first sentence of the description as a one-line description
  const shortDesc = project.description.split('. ')[0] + '.';

  return (
    <SpotlightCard 
      spotlightColor="rgba(47, 111, 237, 0.06)" 
      className="p-6 rounded-xl border border-border-clean bg-surface w-full shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 relative group flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-mono font-bold text-text-secondary/50">
            {index < 10 ? `0${index}` : index}
          </span>
          <span className="text-[10px] font-mono font-semibold tracking-wider text-text-secondary/70 uppercase">
            {project.role}
          </span>
        </div>

        <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-accent-blue transition-colors">
          {project.name}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mt-2">
          {shortDesc}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tools.map((tool, idx) => (
            <span 
              key={idx} 
              className="text-[10px] font-mono px-2 py-0.5 bg-accent-dim text-accent-blue rounded-md font-semibold"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="flex gap-4 mt-6 pt-4 border-t border-border-clean/50 text-xs font-mono">
        <a 
          href={project.code} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-text-secondary hover:text-accent-blue font-bold flex items-center gap-1 transition-colors"
        >
          View Code &rarr;
        </a>
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover:text-accent-blue font-bold flex items-center gap-1 transition-colors"
          >
            Live Demo &rarr;
          </a>
        )}
      </div>
    </SpotlightCard>
  );
}

export default ProjectCard;