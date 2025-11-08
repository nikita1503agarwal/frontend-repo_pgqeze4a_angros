import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Waitlist from './components/Waitlist'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Waitlist />
        <CTA />
      </main>
      <footer className="pb-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Polytoly. All rights reserved.
      </footer>
    </div>
  )
}

export default App
