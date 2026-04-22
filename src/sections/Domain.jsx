import { useState } from 'react';
import Section from '../components/Section.jsx';
import { domainTabs } from '../data/data.js';

function Domain() {
  const [active, setActive] = useState(0);
  const current = domainTabs[active];

  return (
    <Section id="domain" eyebrow="02 / Domain" title="Research Domain">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {domainTabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActive(index)}
              className={`border px-5 py-3 font-mono text-sm transition ${
                active === index
                  ? 'border-cyber-green bg-cyber-green text-black shadow-glow'
                  : 'border-cyber-green/25 bg-black/30 text-cyber-green hover:border-cyber-green'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass-panel p-6 sm:p-8">
          {current.paragraphs && (
            <div className="space-y-5 text-center text-lg leading-8 text-slate-300">
              {current.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {current.cards && (
            <div className="grid gap-6 sm:grid-cols-2">
              {current.cards.map((card) => (
                <article key={card.title} className="border border-cyber-green/15 bg-black/30 p-5">
                  <h3 className="font-mono text-lg font-bold text-cyber-green">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Domain;
