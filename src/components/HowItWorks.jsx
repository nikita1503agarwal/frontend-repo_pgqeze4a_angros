import { Wallet, Users, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: 'Connect your wallet',
      desc: 'Use Phantom or any Solana wallet to authenticate in one click.',
    },
    {
      icon: Users,
      title: 'Join the waitlist',
      desc: 'We verify your address and add you securely to the list.',
    },
    {
      icon: CheckCircle2,
      title: 'Get notified early',
      desc: 'We’ll email or DM when you’re eligible to access the beta.',
    },
  ];

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">How it works</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A simple, secure flow designed for crypto-native communities.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <s.icon className="h-6 w-6 text-violet-400" />
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
