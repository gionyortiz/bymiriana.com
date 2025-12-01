'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8d5c4] shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-tight text-gray-900 hover:text-[#b88b5f] transition-colors">
            by<span className="font-medium text-[#d4a574]">Miriana</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#b88b5f] transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-[#b88b5f] transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#b88b5f] transition-colors">
              About
            </Link>
            <Link href="/contact" className="px-6 py-2 bg-[#d4a574] text-white rounded-full hover:bg-[#b88b5f] transition-all shadow-md hover:shadow-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-[#b88b5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-[#b88b5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#b88b5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#b88b5f] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
