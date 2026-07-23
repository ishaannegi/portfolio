"use client";

const categorizedSkills = {
  "Languages": ['Java', 'Python', 'C', 'C++', 'Javascript', 'Typescript', 'SQL', 'HTML', 'CSS'],
  "Backend & Web": ['Spring Boot', 'React', 'Next JS', 'Node JS', 'Express', 'Tailwind'],
  "DevOps & Systems": ['Docker', 'Kubernetes', 'Jenkins', 'Grafana', 'Graphite', 'Nagios', 'AWS', 'Git', 'Linux', 'Windows'],
  "Databases & Core": ['PostgreSQL', 'MySQL', 'MongoDB', 'Data Structures & Algorithms']
};

function Skills() {
  return (
    <div id="skills" className="my-16 lg:my-32 border-t border-border-clean pt-16 mx-auto max-w-[1120px]">
      <div className="mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Capability</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          Technical <span className="text-accent-blue">skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-3 py-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary/70">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="text-xs font-mono px-3 py-1.5 bg-accent-dim text-accent-blue rounded-md font-semibold transition-all hover:bg-accent-blue hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;