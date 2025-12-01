import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#faf7f4] to-[#e8d5c4] border-t border-[#d4a574]/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light tracking-tight text-gray-900 mb-3">
              by<span className="font-medium text-[#b88b5f]">Miriana</span>
            </h3>
            <p className="text-gray-600 text-sm">
              A visual diary of nature, small details, and meaningful moments — captured with patience and heart.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 hover:text-[#b88b5f] transition-colors text-sm">
                Home
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-[#b88b5f] transition-colors text-sm">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#b88b5f] transition-colors text-sm">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#b88b5f] transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b88b5f] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="mailto:contact@bymiriana.com" className="text-gray-600 hover:text-[#b88b5f] transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d4a574]/30 text-center">
          <p className="text-sm text-gray-600 mb-2">
            © {currentYear} byMiriana. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Website powered by{' '}
            <a 
              href="https://masaquantum.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#b88b5f] hover:text-[#d4a574] transition-colors font-medium"
            >
              MasaQuantum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
