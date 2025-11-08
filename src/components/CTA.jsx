import React from 'react'

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h3 className="text-2xl sm:text-3xl font-semibold text-white">Siap gabung komunitas awal Polytoly?</h3>
      <div className="mt-6 flex items-center justify-center">
        <a href="#waitlist" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] shadow-md hover:opacity-90 transition-opacity">Join Waitlist</a>
      </div>
      <p className="mt-6 text-xs text-zinc-500">Polytoly • Built on Solana</p>
      <div className="mt-2 text-xs text-zinc-500 flex items-center justify-center gap-4">
        <a href="#" className="hover:text-zinc-300">Docs (soon)</a>
        <span>•</span>
        <a href="#" className="hover:text-zinc-300">Community (soon)</a>
      </div>
    </section>
  )
}
