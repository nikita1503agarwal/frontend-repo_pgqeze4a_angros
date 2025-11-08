import React from 'react'

export default function Story() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">About the Project</h2>
          <p className="mt-4 text-zinc-300 leading-7">
            Polytoly is a simple, fast prediction market built on Solana. Our mission is to make
            speculating on real-world events easy, transparent, and accessible to everyone. With low fees
            and fast confirmation, you can take YES/NO positions on the topics you believe in.
          </p>
          <p className="mt-4 text-zinc-300 leading-7">
            We focus on great UX, capital-efficient liquidity, and fair settlement. All transactions
            happen on Solana, so history and outcomes are publicly auditable.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-zinc-400">Speed</div>
              <div className="text-white font-semibold mt-1">~400ms Finality</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-zinc-400">Fees</div>
              <div className="text-white font-semibold mt-1">Ultra Low</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-zinc-400">Access</div>
              <div className="text-white font-semibold mt-1">Wallet-First</div>
            </div>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-white font-medium">Use Cases</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-2">
              <li>Crypto, politics, and sports events</li>
              <li>Research and sentiment analysis</li>
              <li>Hedging specific scenarios</li>
            </ul>
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-white font-medium">Security</h3>
            <p className="mt-2 text-sm text-zinc-300">Contracts are audited and follow industry best practices to protect user funds.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
