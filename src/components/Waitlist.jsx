import React, { useEffect, useMemo, useState } from 'react'

const ENV_BASE = import.meta.env.VITE_BACKEND_URL || ''

function GradientButton({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] shadow-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}

function deriveBackendBase() {
  // Prefer explicit env var
  if (ENV_BASE) return ENV_BASE.replace(/\/$/, '')
  // Fallback: same host but port 8000 (works in this sandbox)
  try {
    const url = new URL(window.location.href)
    return `${url.protocol}//${url.hostname}:8000`
  } catch {
    return ''
  }
}

export default function Waitlist() {
  const [connectedAddress, setConnectedAddress] = useState('')
  const [showManual, setShowManual] = useState(false)
  const [manualAddress, setManualAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [items, setItems] = useState([])

  const hasPhantom = typeof window !== 'undefined' && window.solana && window.solana.isPhantom

  const backend = useMemo(() => deriveBackendBase(), [])

  const isValidSolana = (addr) => /^(?=.{32,60}$)[1-9A-HJ-NP-Za-km-z]+$/.test(addr)

  const fetchList = async () => {
    if (!backend) return
    try {
      const res = await fetch(`${backend}/api/waitlist`)
      const data = await res.json()
      if (data?.ok) setItems(Array.isArray(data.items) ? data.items : [])
    } catch (e) {
      console.error(e)
      setMessage('Failed to load waitlist. Please try again later.')
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  const connectWallet = async () => {
    setMessage('')
    if (hasPhantom) {
      try {
        const resp = await window.solana.connect({ onlyIfTrusted: false })
        const addr = resp?.publicKey?.toString?.() || ''
        if (addr) setConnectedAddress(addr)
      } catch (e) {
        setMessage('Wallet connection was closed or failed.')
      }
    } else {
      setShowManual(true)
    }
  }

  const submitManual = () => {
    const addr = manualAddress.trim()
    if (!isValidSolana(addr)) {
      setMessage('Invalid wallet address. Please enter a valid Solana (base58) address.')
      return
    }
    setConnectedAddress(addr)
    setShowManual(false)
  }

  const joinWaitlist = async () => {
    if (!backend) {
      setMessage('Server URL is not set. Please configure VITE_BACKEND_URL or ensure the backend is running on port 8000.')
      return
    }
    if (!connectedAddress) {
      setMessage('Please connect your wallet first or enter your address manually.')
      return
    }
    if (!isValidSolana(connectedAddress)) {
      setMessage('Invalid wallet address format.')
      return
    }
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${backend}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: connectedAddress, source: 'waitlist-section' }),
      })
      const data = await res.json()
      if (res.ok && data?.ok) {
        setMessage('Successfully joined the waitlist!')
        fetchList()
      } else {
        setMessage(data?.detail || 'Failed to save. Please try again.')
      }
    } catch (e) {
      setMessage('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (val) => {
    try {
      if (!val) return ''
      // Support number or string date
      const d = typeof val === 'number' ? new Date(val) : new Date(val)
      if (Number.isNaN(d.getTime())) return ''
      return d.toLocaleString()
    } catch {
      return ''
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Join the Waitlist</h2>
          <p className="mt-3 text-zinc-300">
            Get early access to Polytoly. Connect a wallet or enter your Solana address. Your address is stored securely on our server (not in browser cache).
          </p>

          <div className="mt-6 space-y-4">
            {!connectedAddress ? (
              <div>
                <GradientButton onClick={connectWallet}>Connect Wallet</GradientButton>
                {!hasPhantom && (
                  <p className="mt-2 text-xs text-zinc-500">No wallet detected. You can enter your address manually.</p>
                )}
              </div>
            ) : (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                <div className="flex items-center justify-between gap-3">
                  <span>Connected: <span className="text-white font-medium">{connectedAddress}</span></span>
                  <button onClick={() => setConnectedAddress('')} className="text-xs text-zinc-400 hover:text-white">Disconnect</button>
                </div>
              </div>
            )}

            {(!hasPhantom || showManual) && !connectedAddress && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <label className="block text-xs text-zinc-400 mb-2">Enter Solana Address (base58)</label>
                <input
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400/40"
                  placeholder="e.g. 7Yh..."
                  value={manualAddress}
                  onChange={(e) => setManualAddress(e.target.value)}
                />
                <div className="mt-3 flex gap-2">
                  <GradientButton onClick={submitManual}>Use This Address</GradientButton>
                  {!hasPhantom && (
                    <button onClick={() => setShowManual(false)} className="text-sm text-zinc-400 hover:text-white">Cancel</button>
                  )}
                </div>
              </div>
            )}

            <div>
              <GradientButton onClick={joinWaitlist} disabled={loading} className={loading ? 'opacity-70 cursor-not-allowed' : ''}>
                {loading ? 'Saving...' : 'Join Waitlist'}
              </GradientButton>
              {message && <p className="mt-2 text-sm text-zinc-300">{message}</p>}
              {!backend && (
                <p className="mt-2 text-xs text-red-400">Backend URL not detected. Set VITE_BACKEND_URL or run backend on port 8000.</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Waitlist (latest)</h3>
          <p className="mt-1 text-sm text-zinc-400">Recently joined addresses, newest first.</p>
          <div className="mt-4 space-y-3 max-h-[360px] overflow-auto pr-1">
            {items.length === 0 ? (
              <div className="text-sm text-zinc-500">No signups yet.</div>
            ) : (
              items.map((it) => (
                <div key={it.id} className="rounded-md border border-white/10 bg-white/5 p-3 text-sm flex items-center justify-between">
                  <span className="truncate mr-3">{it.address}</span>
                  <span className="text-xs text-zinc-500">{formatDate(it.created_at)}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
