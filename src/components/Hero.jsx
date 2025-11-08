import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6x4h8C3m8O9JZ2Wz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              The fastest on-chain waitlist for Solana communities
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Grow and activate your community with a seamless wallet-based join flow, referral tracking, and instant eligibility. Built for speed on Solana.
            </p>
            <div className="mt-8 flex items-center gap-4 pointer-events-auto">
              <a href="#waitlist" className="inline-flex items-center gap-2 rounded-full bg-violet-500 hover:bg-violet-400 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-violet-500/25 transition">
                Join the waitlist
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#how" className="text-white/80 hover:text-white text-sm">See how it works</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
