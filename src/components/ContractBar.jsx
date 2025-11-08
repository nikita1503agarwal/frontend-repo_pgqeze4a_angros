import React from 'react'

export default function ContractBar() {
  const addr = 'xxxxxxxxxxxxxxxpump'

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(addr)
      alert('Contract address copied!')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-4">
      <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 flex flex-col sm:flex-row items-center gap-3 justify-between">
        <div className="text-sm">
          <span className="text-zinc-400">Contract Address: </span>
          <span className="text-white font-mono">{addr}</span>
        </div>
        <button onClick={copy} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] hover:opacity-90 transition-opacity">Copy</button>
      </div>
    </div>
  )
}
