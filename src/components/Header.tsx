'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/logo.png"
              alt="byMiriana Photography"
              width={200}
              height={62}
              className="h-10 w-auto md:h-12 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">
              Home
            </Link>
            <Link href="/portfolio" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">
              Portfolio
            </Link>
            <Link href="/about" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 border border-[#c9956a] text-[#c9956a] text-xs tracking-[0.2em] uppercase hover:bg-[#c9956a] hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 flex flex-col gap-5">
            <Link href="/" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/portfolio" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/about" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-white/50 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
