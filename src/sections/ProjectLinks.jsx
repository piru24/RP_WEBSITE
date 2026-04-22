import Section from '../components/Section.jsx';
import { projectLinks } from '../data/data.js';

function ProjectLinks() {
  return (
    <Section id="project-links" eyebrow="10 / Links" title="Project Links">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {projectLinks.map((link) => (
          <article key={link.title} className="glass-panel p-6">
            <h3 className="font-mono text-2xl font-bold text-white">{link.title}</h3>
            <a href={link.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex font-mono text-cyber-green hover:text-cyber-cyan">
              {link.label}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ProjectLinks;
