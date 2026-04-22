import Section from '../components/Section.jsx';
import { team } from '../data/data.js';

function Team() {
  return (
    <Section id="team" eyebrow="08 / Team" title="Meet Our Team">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article key={member.email} className="glass-panel p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-glow">
            <div className="mx-auto grid h-20 w-20 place-items-center border border-cyber-green/40 bg-cyber-green/10 font-mono text-2xl font-bold text-cyber-green">
              {member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
            </div>
            <h3 className="mt-5 font-mono text-xl font-bold text-white">{member.name}</h3>
            <p className="mt-2 text-cyber-cyan">{member.role}</p>
            <a href={`mailto:${member.email}`} className="mt-3 block break-words text-sm text-cyber-muted hover:text-cyber-green">
              {member.email}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Team;
