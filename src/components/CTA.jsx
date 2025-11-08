import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to grow with wallet-native onboarding?</h3>
            <p className="mt-3 text-white/80">Connect your wallet and join the waitlist in seconds. No forms. No friction.</p>
            <div className="mt-6">
              <a href="#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
                Connect wallet & join waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
