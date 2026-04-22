import Section from '../components/Section.jsx';
import { features } from '../data/data.js';

function Features() {
  return (
    <Section id="features" eyebrow="04 / Features" title="Key Features Overview">
      <div className="mx-auto max-w-5xl">
        {features.map((feature, index) => (
          <div key={feature.title} className="timeline-item">
            <div className="timeline-node" />
            <article className="glass-panel p-6 transition duration-300 hover:shadow-glow">
              <p className="font-mono text-sm text-cyber-green">Feature {index + 1}</p>
              <h3 className="mt-3 font-mono text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{feature.description}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Features;
