import Section from '../components/Section.jsx';
import { tools } from '../data/data.js';

function Tools() {
  return (
    <Section id="tools" eyebrow="05 / Tools" title="Tools & Technologies">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.name} className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-cyber-cyan/50 hover:shadow-cyan">
            <h3 className="font-mono text-xl font-bold text-white">{tool.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{tool.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Tools;
