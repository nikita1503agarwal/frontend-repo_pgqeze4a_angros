import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContractBar from './components/ContractBar'
import HowItWorks from './components/HowItWorks'
import Story from './components/Story'
import Waitlist from './components/Waitlist'
import WhySolana from './components/WhySolana'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ContractBar />
        <HowItWorks />
        <Story />
        <WhySolana />
        <Waitlist />
        <CTA />
      </main>
      <footer className="pb-10" />
    </div>
  )
}

export default App
