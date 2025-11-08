import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <Rocket className="h-5 w-5 text-violet-400" />
            <span>Polytoly</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#why" className="hover:text-white transition">Why Solana</a>
            <a href="#integrations" className="hover:text-white transition">Integrations</a>
            <a href="#waitlist" className="hover:text-white transition">Waitlist</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2 rounded hover:bg-white/10" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-white/80">
              <a href="#how" className="hover:text-white transition" onClick={() => setOpen(false)}>How it works</a>
              <a href="#why" className="hover:text-white transition" onClick={() => setOpen(false)}>Why Solana</a>
              <a href="#integrations" className="hover:text-white transition" onClick={() => setOpen(false)}>Integrations</a>
              <a href="#waitlist" className="hover:text-white transition" onClick={() => setOpen(false)}>Waitlist</a>
              <a href="#faq" className="hover:text-white transition" onClick={() => setOpen(false)}>FAQ</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
