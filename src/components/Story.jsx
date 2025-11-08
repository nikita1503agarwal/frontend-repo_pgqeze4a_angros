import React from 'react'

export default function Story() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">About the Project</h2>
          <p className="mt-4 text-zinc-300 leading-7">
            Polytoly adalah platform prediction market sederhana yang dibangun di atas Solana. Misi kami adalah membuat
            spekulasi tentang peristiwa nyata menjadi mudah, transparan, dan dapat diakses siapa pun. Dengan biaya yang
            rendah dan konfirmasi cepat, Anda bisa mengambil posisi YES/NO terhadap topik yang Anda yakini.
          </p>
          <p className="mt-4 text-zinc-300 leading-7">
            Kami fokus pada UX yang cepat, likuiditas efisien, serta penyelesaian yang adil. Semua transaksi terjadi di
            jaringan Solana, sehingga riwayat dan hasil dapat diaudit secara publik.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-zinc-400">Kecepatan</div>
              <div className="text-white font-semibold mt-1">~400ms Finality</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-zinc-400">Biaya</div>
              <div className="text-white font-semibold mt-1">Sangat Rendah</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-zinc-400">Akses</div>
              <div className="text-white font-semibold mt-1">Wallet-First</div>
            </div>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-white font-medium">Use Cases</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-2">
              <li>Event politik, kripto, dan olahraga</li>
              <li>Research dan sentiment analysis</li>
              <li>Hedging terhadap skenario tertentu</li>
            </ul>
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-white font-medium">Keamanan</h3>
            <p className="mt-2 text-sm text-zinc-300">Kontrak diaudit dan mengikuti praktik terbaik industri untuk menjaga dana pengguna.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
