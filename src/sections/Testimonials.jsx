import Section from '../components/Section.jsx';
import { testimonials } from '../data/data.js';

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="06 / Signal" title="Trusted Feedback">
      <div className="mx-auto max-w-4xl">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="glass-panel p-8 text-center sm:p-10">
            <blockquote className="font-mono text-2xl leading-10 text-white">"{testimonial.quote}"</blockquote>
            <figcaption className="mt-7 text-cyber-muted">
              <span className="text-cyber-green">{testimonial.name}</span> / {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
