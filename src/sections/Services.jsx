import Section from '../components/Section.jsx';
import { services } from '../data/data.js';

function Services() {
  return (
    <Section id="services" eyebrow="03 / Services" title="What I Secure">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <article key={service.title} className="glass-panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyber-cyan/50 hover:shadow-cyan">
            <p className="font-mono text-sm text-cyber-green">0{index + 1}</p>
            <h3 className="mt-5 font-mono text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Services;
