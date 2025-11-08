export default function FAQ() {
  const faqs = [
    {
      q: 'Apa itu Polytoly?',
      a: 'Polytoly adalah landing page dan sistem waitlist berbasis dompet untuk komunitas Solana. Pengguna cukup connect wallet lalu bergabung ke daftar tunggu.',
    },
    {
      q: 'Bagaimana cara bergabung ke waitlist?',
      a: 'Klik tombol Connect Wallet, pilih Phantom atau wallet lain, lalu konfirmasi. Setelah terhubung, alamat akan diverifikasi dan Anda masuk ke waitlist.',
    },
    {
      q: 'Apakah ini gratis?',
      a: 'Ya, bergabung ke waitlist gratis. Biaya jaringan tidak diperlukan.',
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">FAQ</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer text-white/90 font-medium">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
