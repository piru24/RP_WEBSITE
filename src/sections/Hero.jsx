import { motion } from 'framer-motion';
import { site } from '../data/data.js';

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-5 pt-24 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <p className="terminal-label">biomentor@learning-ai:~$ launch</p>
          <h1 className="mt-5 max-w-4xl font-mono text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {site.tagline}
            <span className="block text-cyber-green cyber-text-glow">{site.headline}</span>
          </h1>
          <p className="typing-line mt-6 max-w-3xl font-mono text-lg text-cyber-cyan">
            AI-powered personalized learning platform
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{site.intro}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#about" className="cyber-button">
              Get Started
            </a>
            <a href="#demo-video" className="cyber-button cyber-button-secondary">
              Watch Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          className="terminal-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flex items-center gap-2 border-b border-cyber-green/10 px-5 py-4">
            <span className="h-3 w-3 bg-cyber-green" />
            <span className="h-3 w-3 bg-cyber-cyan" />
            <span className="h-3 w-3 bg-cyber-purple" />
            <span className="ml-auto font-mono text-xs text-cyber-muted">bio-learning-core</span>
          </div>
          <div className="space-y-4 p-6 font-mono text-sm leading-7">
            <p><span className="text-cyber-green">$</span> analyze --learner "A/L Biology"</p>
            <p className="text-cyber-muted">detected: long-text-load, vocabulary-decay, feedback-gap</p>
            <p><span className="text-cyber-green">$</span> enable modules</p>
            <p className="text-slate-200">summarization | adaptive-quizzes | answer-evaluation | spaced-repetition</p>
            <p><span className="text-cyber-green">$</span> status</p>
            <p className="text-cyber-cyan">PERSONALIZED_LEARNING_ONLINE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
