export default function FooterSection() {
  return (
    <footer className="w-full py-12 text-[13px] text-zinc-600 font-normal tracking-tight">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col sm:flex-row justify-between gap-4">
        
        {/* Left: Quote + Credits */}
        <div className="space-y-1 leading-relaxed">
          <p>There’s beauty in the unknown.</p>
          <p>
            Design inspired by <a href="https://paco.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">Paco</a>.
          </p>
        </div>

        {/* Right: Personal stamp */}
        <div className="sm:text-right text-zinc-500">
          <p className="opacity-80">✧ born 2004</p>
        </div>
      </div>
    </footer>
  );
}
