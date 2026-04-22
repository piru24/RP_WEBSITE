import Section from '../components/Section.jsx';
import { Icon } from '../components/Icons.jsx';
import { skills } from '../data/data.js';

function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Skills" title="Security Toolkit">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center border border-cyber-green/40 bg-cyber-green/10 text-cyber-green">
                <Icon name={group.icon} />
              </div>
              <h3 className="font-mono text-xl font-bold text-white">{group.category}</h3>
            </div>
            <div className="mt-7 space-y-5">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between font-mono text-sm">
                    <span>{skill.name}</span>
                    <span className="text-cyber-green">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden bg-white/5">
                    <div className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan shadow-glow" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
