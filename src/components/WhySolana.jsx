import React from 'react'

export default function WhySolana() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">Why Solana</h2>
      <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-zinc-300">
        <li className="rounded-lg border border-white/10 bg-white/5 p-4">Low fees</li>
        <li className="rounded-lg border border-white/10 bg-white/5 p-4">Fast confirmation</li>
        <li className="rounded-lg border border-white/10 bg-white/5 p-4">On-chain transparency</li>
      </ul>
    </section>
  )
}
