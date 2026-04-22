import Section from '../components/Section.jsx';
import { researchHighlights } from '../data/data.js';

function Research() {
  return (
    <Section id="research" eyebrow="03 / Research" title="Research Highlights">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
        {researchHighlights.map((item, index) => (
          <article key={item.title} className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-cyan">
            <p className="font-mono text-sm text-cyber-green">0{index + 1}</p>
            <h3 className="mt-4 font-mono text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Research;
