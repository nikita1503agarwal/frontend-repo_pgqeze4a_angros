import { Wallet, Link2, Puzzle, Layers } from 'lucide-react';

export default function Integrations() {
  const items = [
    {
      icon: Wallet,
      name: 'Phantom',
      desc: 'One-tap wallet connect for a seamless join flow.',
      href: 'https://phantom.app',
    },
    {
      icon: Wallet,
      name: 'Solflare',
      desc: 'Popular Solana wallet supported out of the box.',
      href: 'https://solflare.com',
    },
    {
      icon: Puzzle,
      name: 'Backpack',
      desc: 'xNFT-ready wallet for advanced users.',
      href: 'https://www.backpack.app',
    },
    {
      icon: Link2,
      name: 'Jupiter',
      desc: 'Deep links for swaps and token discovery.',
      href: 'https://jup.ag',
    },
    {
      icon: Layers,
      name: 'Helius',
      desc: 'Reliable RPC + webhooks to keep things instant.',
      href: 'https://helius.dev',
    },
    {
      icon: Link2,
      name: 'Dialect',
      desc: 'DM and notifications to reach your members.',
      href: 'https://www.dialect.to',
    },
  ];

  return (
    <section id="integrations" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Integrations</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Works with the tools your Solana community already uses. No friction, just connect and go.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.name}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 block"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-violet-500/15 border border-violet-300/20 flex items-center justify-center">
                  <it.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="text-white font-medium">{it.name}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{it.desc}</p>
              <span className="mt-4 inline-block text-xs text-white/60 group-hover:text-white">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
