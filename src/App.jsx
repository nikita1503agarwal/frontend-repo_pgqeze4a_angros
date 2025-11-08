import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhySolana from './components/WhySolana'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhySolana />
        <CTA />
      </main>
      <footer className="pb-10" />
    </div>
  )
}

export default App
