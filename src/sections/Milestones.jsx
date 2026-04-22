import Section from '../components/Section.jsx';
import { milestones } from '../data/data.js';

function Milestones() {
  return (
    <Section id="milestones" eyebrow="06 / Milestones" title="Project Milestones">
      <div className="mx-auto max-w-4xl">
        {milestones.map((item) => (
          <div key={`${item.date}-${item.title}`} className="timeline-item">
            <div className="timeline-node" />
            <div className="glass-panel p-6">
              <p className="font-mono text-sm text-cyber-green">{item.date}</p>
              <h3 className="mt-3 font-mono text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Milestones;
