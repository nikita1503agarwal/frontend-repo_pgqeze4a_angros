import { Zap, Shield, Clock } from 'lucide-react';

export default function WhySolana() {
  const features = [
    {
      icon: Zap,
      title: 'Blazing fast',
      desc: 'Sub-second confirmation means your community never waits.',
    },
    {
      icon: Shield,
      title: 'Low fees',
      desc: 'On-chain actions cost fractions of a cent—scale without pain.',
    },
    {
      icon: Clock,
      title: 'Always on',
      desc: 'A reliable network that keeps your waitlist responsive 24/7.',
    },
  ];

  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Why Solana</h2>
        <p className="mt-3 text-white/70 max-w-2xl">The best place to build fast, smooth community experiences.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <f.icon className="h-6 w-6 text-violet-400" />
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
