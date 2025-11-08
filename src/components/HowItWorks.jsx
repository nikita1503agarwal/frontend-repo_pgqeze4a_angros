import React from 'react'
import { Wallet, ListChecks, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Connect your Solana wallet',
    desc: 'Use your favorite wallet to get started in seconds.'
  },
  {
    icon: ListChecks,
    title: 'Choose a market',
    desc: 'Browse trending events and pick a side.'
  },
  {
    icon: CheckCircle2,
    title: "Buy YES/NO and claim if you're right",
    desc: 'Simple positions. Settle when outcomes resolve.'
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">How it Works</h2>
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <s.icon className="h-6 w-6 text-white" />
            <h3 className="mt-4 text-white font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
