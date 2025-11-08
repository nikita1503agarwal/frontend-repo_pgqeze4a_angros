import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContractBar from './components/ContractBar';
import HowItWorks from './components/HowItWorks';
import WhySolana from './components/WhySolana';
import Waitlist from './components/Waitlist';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="py-6">
          <ContractBar />
        </div>
        <HowItWorks />
        <WhySolana />
        <Waitlist />
        <CTA />
        <FAQ />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Polytoly. All rights reserved.
      </footer>
    </div>
  );
}
