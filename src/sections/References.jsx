import Section from '../components/Section.jsx';
import { references } from '../data/data.js';

function References() {
  return (
    <Section id="references" eyebrow="11 / References" title="References">
      <div className="mx-auto max-w-5xl">
        <div className="glass-panel space-y-4 p-6 sm:p-8">
          {references.map((reference, index) => (
            <div key={`${index}-${reference.slice(0, 18)}`} className="flex gap-4">
              <span className="min-w-10 font-mono text-cyber-green">[{index + 1}]</span>
              <p className="text-sm leading-7 text-slate-300">{reference}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default References;
