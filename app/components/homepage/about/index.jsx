// AboutSection component



function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-32 mx-auto max-w-[680px]">
      <div className="mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">Biography</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mt-1">
          A bit <span className="text-accent-blue">about me</span>
        </h2>
      </div>
      <div className="flex flex-col gap-6 text-text-secondary text-base sm:text-[1.0625rem] leading-relaxed font-sans">
        <p>
          I'm a Computer Science student at Vellore Institute of Technology, specializing in IoT, with a growing focus on DevOps, AI applications, and backend systems. I enjoy building things end-to-end — from designing machine learning CPU schedulers to deploying full-stack AI career platforms on Vercel.
        </p>
        <p>
          I've solved 250+ problems on LeetCode, worked hands-on with AWS cloud fundamentals, and automated deployments with Docker, Kubernetes, and Jenkins. I care about writing clean, well-structured code and understanding systems deeply rather than just making them work.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;