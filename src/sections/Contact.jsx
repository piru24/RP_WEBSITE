import Section from '../components/Section.jsx';
import { profile } from '../data/data.js';

function Contact() {
  return (
    <Section id="contact" eyebrow="07 / Contact" title="Open A Secure Channel">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel p-7">
          <p className="terminal-label">root@portfolio:~$ connect</p>
          <h3 className="mt-5 font-mono text-3xl font-bold text-white">Have a project in mind?</h3>
          <p className="mt-5 leading-8 text-slate-300">
            Send the brief, the risk, or the wild idea. This form is ready to wire into your preferred backend.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-block font-mono text-cyber-green hover:text-cyber-cyan">
            {profile.email}
          </a>
        </div>

        <form className="terminal-card p-6">
          <label className="terminal-field">
            <span>$ set NAME=</span>
            <input type="text" placeholder="Your name" />
          </label>
          <label className="terminal-field">
            <span>$ set EMAIL=</span>
            <input type="email" placeholder="you@example.com" />
          </label>
          <label className="terminal-field">
            <span>$ write MESSAGE</span>
            <textarea rows="5" placeholder="Tell me about the mission..." />
          </label>
          <button type="button" className="cyber-button mt-4 w-full justify-center">
            Send Encrypted Message
          </button>
        </form>
      </div>
    </Section>
  );
}

export default Contact;
