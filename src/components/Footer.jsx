import { site } from '../data/data.js';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyber-green/10 px-5 py-10 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyber-muted">
        © 2026 {site.name}. {site.footer}.
      </p>
    </footer>
  );
}

export default Footer;
