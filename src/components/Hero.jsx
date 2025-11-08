import React from 'react'
import Spline from '@splinetool/react-spline'

const markets = [
  {
    id: 1,
    q: 'Will BTC close above $80,000?',
    yes: 62,
    no: 38,
  },
  {
    id: 2,
    q: 'Will SOL stay above $200 this month?',
    yes: 54,
    no: 46,
  },
  {
    id: 3,
    q: 'Will ETH ETF be approved this quarter?',
    yes: 41,
    no: 59,
  },
]

function GradientButton({ children, className = '', href = '#cta' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] shadow-md hover:opacity-90 transition-opacity ${className}`}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Polytoly — Simple Prediction Markets on Solana
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl">
            Trade YES/NO on real-world events with fast, low-fee transactions powered by Solana.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <GradientButton className="pointer-events-auto">Launch App</GradientButton>
            <a href="#markets" className="pointer-events-auto inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white/80 hover:text-white border border-white/10">
              View Markets
            </a>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 md:p-7">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-zinc-400">Trending Markets</span>
            <span className="text-xs text-zinc-500">Demo</span>
          </div>
          <div className="space-y-4" id="markets">
            {markets.slice(0, 2).map((m) => (
              <div key={m.id} className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="text-white/90 font-medium">{m.q}</div>
                <div className="mt-3 flex items-center gap-3 text-sm">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C]"
                      style={{ width: `${m.yes}%` }}
                    />
                  </div>
                  <div className="min-w-[120px] text-right text-zinc-300">
                    <span className="text-emerald-400 font-semibold">YES {m.yes}%</span>
                    <span className="mx-2 text-zinc-500">/</span>
                    <span className="text-pink-400 font-semibold">NO {m.no}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
