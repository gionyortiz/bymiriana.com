import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <h3 className="text-4xl font-thin text-white tracking-tight mb-4">
              by<span className="font-serif italic text-[#c9956a]">Miriana</span>
            </h3>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              A visual diary of nature, small details, and meaningful moments — captured with patience and heart.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/25 text-[0.6rem] tracking-[0.35em] uppercase mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-white/40 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="/portfolio" className="text-white/40 hover:text-white transition-colors text-sm">Portfolio</Link>
              <Link href="/about" className="text-white/40 hover:text-white transition-colors text-sm">About</Link>
              <Link href="/contact" className="text-white/40 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white/25 text-[0.6rem] tracking-[0.35em] uppercase mb-6">Connect</h4>
            <div className="flex gap-5 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c9956a] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="mailto:contact@bymiriana.com" className="text-white/40 hover:text-[#c9956a] transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <a href="mailto:contact@bymiriana.com" className="text-white/30 text-xs hover:text-[#c9956a] transition-colors">
              contact@bymiriana.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {currentYear} byMiriana. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Website by{' '}
            <a href="https://nexaquantum.net" target="_blank" rel="noopener noreferrer" className="text-[#c9956a]/50 hover:text-[#c9956a] transition-colors">
              NexaQuantum LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
