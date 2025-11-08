import React, { useEffect, useMemo, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function GradientButton({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00D18C] shadow-md hover:opacity-90 transition-opacity ${className}`}
    >
      {children}
    </button>
  )
}

export default function Waitlist() {
  const [connectedAddress, setConnectedAddress] = useState('')
  const [manualOpen, setManualOpen] = useState(false)
  const [manualAddress, setManualAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [items, setItems] = useState([])

  const hasPhantom = typeof window !== 'undefined' && window.solana && window.solana.isPhantom

  const backend = useMemo(() => {
    return API_BASE ? API_BASE.replace(/\/$/, '') : ''
  }, [])

  const fetchList = async () => {
    try {
      const res = await fetch(`${backend}/api/waitlist`)
      const data = await res.json()
      if (data?.ok) setItems(data.items || [])
    } catch (e) {
      console.error(e)
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
      setManualOpen(true)
    }
  }

  const submitManual = () => {
    const addr = manualAddress.trim()
    if (addr.length < 32 || addr.length > 60) {
      setMessage('Alamat wallet tidak valid.')
      return
    }
    setConnectedAddress(addr)
    setManualOpen(false)
  }

  const joinWaitlist = async () => {
    if (!connectedAddress) {
      setMessage('Silakan connect wallet terlebih dahulu.')
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
      if (data?.ok) {
        setMessage('Berhasil bergabung ke waitlist!')
        fetchList()
      } else {
        setMessage(data?.detail || 'Gagal menyimpan. Coba lagi.')
      }
    } catch (e) {
      setMessage('Terjadi kesalahan jaringan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Join Waitlist</h2>
          <p className="mt-3 text-zinc-300">Bergabung untuk akses awal ke Polytoly. Anda harus connect wallet agar kami mencatat alamat Anda (data disimpan di server, bukan cache browser).</p>

          <div className="mt-6 space-y-4">
            {!connectedAddress ? (
              <div>
                <GradientButton onClick={connectWallet}>Connect Wallet</GradientButton>
                {!hasPhantom && (
                  <p className="mt-2 text-xs text-zinc-500">Tidak menemukan ekstensi wallet. Anda bisa memasukkan alamat secara manual.</p>
                )}
              </div>
            ) : (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                <div className="flex items-center justify-between gap-3">
                  <span>Terhubung: <span className="text-white font-medium">{connectedAddress}</span></span>
                  <button onClick={() => setConnectedAddress('')} className="text-xs text-zinc-400 hover:text-white">Disconnect</button>
                </div>
              </div>
            )}

            {manualOpen && !hasPhantom && !connectedAddress && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <label className="block text-xs text-zinc-400 mb-2">Masukkan alamat Solana (base58)</label>
                <input
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-400/40"
                  placeholder="Contoh: 7Yh..."
                  value={manualAddress}
                  onChange={(e) => setManualAddress(e.target.value)}
                />
                <div className="mt-3 flex gap-2">
                  <GradientButton onClick={submitManual}>Gunakan Alamat Ini</GradientButton>
                  <button onClick={() => setManualOpen(false)} className="text-sm text-zinc-400 hover:text-white">Batal</button>
                </div>
              </div>
            )}

            <div>
              <GradientButton onClick={joinWaitlist} disabled={loading} className={loading ? 'opacity-70 cursor-not-allowed' : ''}>
                {loading ? 'Menyimpan...' : 'Join Waitlist'}
              </GradientButton>
              {message && <p className="mt-2 text-sm text-zinc-300">{message}</p>}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white">Waitinglist</h3>
          <p className="mt-1 text-sm text-zinc-400">Alamat yang sudah terdaftar (terbaru terlebih dahulu).</p>
          <div className="mt-4 space-y-3 max-h-[360px] overflow-auto pr-1">
            {items.length === 0 ? (
              <div className="text-sm text-zinc-500">Belum ada pendaftar.</div>
            ) : (
              items.map((it) => (
                <div key={it.id} className="rounded-md border border-white/10 bg-white/5 p-3 text-sm flex items-center justify-between">
                  <span className="truncate mr-3">{it.address}</span>
                  <span className="text-xs text-zinc-500">{new Date(it.created_at).toLocaleString?.() || ''}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
