import Section from '../components/Section.jsx';
import { aboutCards } from '../data/data.js';

function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="About BioMentor">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-300">
          <span className="font-semibold text-cyber-green">BioMentor</span> is an AI-powered personalized learning
          platform built specifically for A/L Biology students in Sri Lanka. Developed by final-year undergraduates at
          SLIIT, it integrates cutting-edge technologies such as:
        </p>
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          {aboutCards.map((card) => (
            <article key={card.title} className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <h3 className="font-mono text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
