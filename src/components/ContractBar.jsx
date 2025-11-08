import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContractBar() {
  const [copied, setCopied] = useState(false);
  const address = 'So1aNaPo1yto1y111111111111111111111111111';

  const onCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-3 flex items-center justify-between gap-3">
        <div className="truncate text-sm">
          <div className="text-white/60">Contract Address</div>
          <div className="font-mono text-white truncate">{address}</div>
        </div>
        <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm">
          {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
