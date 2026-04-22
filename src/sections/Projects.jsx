import Section from '../components/Section.jsx';
import { projects } from '../data/data.js';

function Projects() {
  return (
    <Section id="projects" eyebrow="04 / Projects" title="Featured Operations">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="aspect-[16/10] border border-cyber-green/15 bg-black/40 p-5">
              <div className="flex h-full flex-col justify-between bg-grid bg-[length:26px_26px] p-5">
                <span className="w-fit border border-cyber-cyan/40 bg-cyber-cyan/10 px-3 py-1 font-mono text-xs text-cyber-cyan">
                  {project.type}
                </span>
                <div className="font-mono text-cyber-green">
                  <p>$ deploy --target secure</p>
                  <p className="text-cyber-muted">hash: 0x9f00cafe</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-mono text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.codeUrl} className="small-button">View Code</a>
                <a href={project.demoUrl} className="small-button small-button-fill">Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
