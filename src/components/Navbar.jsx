import { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems, site } from '../data/data.js';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyber-green/10 bg-cyber-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.18em]">
          <span className="grid h-9 w-9 place-items-center border border-cyber-green/70 bg-cyber-green/10 text-cyber-green shadow-glow">
            &gt;_
          </span>
          <span className="hidden text-slate-100 sm:block">{site.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#project-links" className="hidden rounded-none border border-cyber-green/50 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-cyber-green transition hover:bg-cyber-green hover:text-black hover:shadow-glow md:inline-flex">
          Links
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-cyber-green/40 text-cyber-green lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="font-mono text-lg">{open ? 'x' : '='}</span>
        </button>
      </nav>

      {open && (
        <motion.div
          className="border-t border-cyber-green/10 bg-cyber-black/95 px-5 py-4 lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-cyber-green/10 px-4 py-3 font-mono text-sm text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
