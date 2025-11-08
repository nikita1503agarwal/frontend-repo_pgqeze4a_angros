import { useEffect, useMemo, useState } from 'react';
import { Loader2, Wallet } from 'lucide-react';

const SOL_ADDRESS_RE = /^(?=.{32,60}$)[1-9A-HJ-NP-Za-km-z]+$/;

function deriveBackendBase() {
  const env = import.meta.env?.VITE_BACKEND_URL;
  if (env) return env.replace(/\/$/, '');
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:8000`;
}

export default function Waitlist() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const base = useMemo(() => deriveBackendBase(), []);

  useEffect(() => {
    setError('');
    setSuccess('');
  }, [address]);

  const connectPhantom = async () => {
    setError('');
    if (!window.solana || !window.solana.isPhantom) {
      setError('Phantom Wallet tidak terdeteksi. Silakan install Phantom terlebih dahulu.');
      return;
    }
    try {
      const resp = await window.solana.connect();
      const pubKey = resp.publicKey?.toString?.() || '';
      if (!SOL_ADDRESS_RE.test(pubKey)) {
        setError('Alamat wallet tidak valid.');
        return;
      }
      setAddress(pubKey);
    } catch (e) {
      setError('Koneksi wallet dibatalkan.');
    }
  };

  const submit = async (addr) => {
    const value = (addr ?? address).trim();
    if (!SOL_ADDRESS_RE.test(value)) {
      setError('Masukkan alamat Solana yang valid.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch(`${base}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: value, source: 'landing' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        const msg = data?.detail || data?.message || 'Gagal menambahkan ke waitlist. Coba lagi.';
        throw new Error(msg);
      }
      setSuccess('Berhasil! Wallet Anda masuk ke waitlist.');
    } catch (e) {
      setError(e.message || 'Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Join Waitlist</h2>
            <p className="mt-3 text-white/70">Hubungkan wallet atau masukkan alamat Anda untuk bergabung.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={connectPhantom} className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-400 text-white px-4 py-3 text-sm font-medium">
                <Wallet className="h-4 w-4" />
                Connect Phantom
              </button>
              <div className="flex-1">
                <div className="flex rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Atau tempel alamat Solana"
                    className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none"
                  />
                  <button
                    onClick={() => submit()}
                    disabled={loading}
                    className="px-4 bg-white/10 hover:bg-white/20 text-white text-sm disabled:opacity-50"
                  >
                    {loading ? <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Mengirim</span> : 'Join'}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-3 text-sm">{error}</div>
            )}
            {success && (
              <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 px-4 py-3 text-sm">{success}</div>
            )}

            <p className="mt-6 text-xs text-white/50">Dengan menekan Join, Anda menyetujui kami menyimpan alamat untuk keperluan akses beta.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Apa yang terjadi setelah Anda connect?</h3>
            <ol className="mt-4 space-y-3 text-sm text-white/70 list-decimal pl-5">
              <li>Kami memverifikasi format alamat Solana Anda.</li>
              <li>Alamat ditambahkan ke daftar tunggu secara aman.</li>
              <li>Anda akan mendapat pemberitahuan saat giliran Anda.</li>
            </ol>
            <p className="mt-4 text-white/60 text-sm">Jika wallet gagal terhubung, Anda bisa menempel alamat secara manual di kolom di samping.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
