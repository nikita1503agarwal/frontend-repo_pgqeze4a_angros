import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg tracking-tight">Polytoly</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#markets" className="text-zinc-300 hover:text-white transition-colors">Markets</a>
          <a href="#how" className="text-zinc-300 hover:text-white transition-colors">How it Works</a>
          <a href="#waitlist" className="inline-flex items-center px-3 py-1.5 rounded-md font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] hover:opacity-90 transition-opacity">
            Join Waitlist
          </a>
        </nav>
        <div className="sm:hidden">
          <a href="#waitlist" className="inline-flex items-center px-3 py-1.5 rounded-md font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] hover:opacity-90 transition-opacity">
            Waitlist
          </a>
        </div>
      </div>
    </header>
  )
}
