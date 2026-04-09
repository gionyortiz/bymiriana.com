import Link from "next/link";
import Image from "next/image";
import { photos } from "@/data/photos";

export default function Home() {
  return (
    <>
      {/* ── Hero — Dark Cinematic ── */}
      <section className="-mt-16 md:-mt-20 pt-16 md:pt-20 relative min-h-screen flex items-center justify-center bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1410_0%,_#0f0f0f_70%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#c9956a] text-[0.65rem] tracking-[0.5em] uppercase mb-10">Photography Studio</p>
          <h1 className="text-[4.5rem] md:text-[7rem] lg:text-[9rem] font-thin tracking-[-0.02em] text-white leading-none mb-8">
            by<span className="font-serif italic text-[#c9956a]">Miriana</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-white/20" />
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase">Nature &middot; Moments &middot; Meaning</p>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="px-10 py-3.5 border border-white/25 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0f0f0f] transition-all duration-300">
              View Portfolio
            </Link>
            <Link href="/contact" className="px-10 py-3.5 border border-[#c9956a] text-[#c9956a] text-xs tracking-[0.2em] uppercase hover:bg-[#c9956a] hover:text-white transition-all duration-300">
              Book a Session
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/20 text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[#c9956a] text-[0.65rem] tracking-[0.4em] uppercase mb-2">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-[#0f0f0f]">Featured</h2>
            </div>
            <Link href="/portfolio" className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-400 hover:text-[#c9956a] transition-colors border-b border-transparent hover:border-[#c9956a] pb-0.5">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {photos.slice(0, 3).map((photo) => (
              <Link key={photo.filename} href="/portfolio" className="group relative aspect-[3/4] bg-[#f5f0eb] overflow-hidden block img-zoom">
                <Image
                  src={`/photos/${photo.filename}`}
                  alt={photo.title || `Photography by Miriana`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-6 h-px bg-[#c9956a] mb-3 group-hover:w-12 transition-all duration-500" />
                  <p className="text-white/60 text-xs tracking-[0.25em] uppercase">View Gallery</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-24 bg-[#f8f5f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-[#c9956a] text-[0.65rem] tracking-[0.4em] uppercase mb-3">Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-thin text-[#0f0f0f] mb-5">What I Capture</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              While most people rush by, she stops and takes a photo. For her, the camera is not just a machine —
              it&apos;s a way to say: <em className="text-gray-600">&ldquo;This moment matters.&rdquo;</em>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { num: '01', title: 'Nature', desc: 'The color of a rose on the sidewalk, the shape of a branch against the sky — quiet beauty revealed in every frame.' },
              { num: '02', title: 'Moments', desc: 'The way the sun warms a wall at the end of the day, light sliding gently through the leaves of a tree.' },
              { num: '03', title: 'Stories', desc: 'Small scenes that tell quiet stories — forgotten corners that hold memories and meaning without words.' },
            ].map((item) => (
              <div key={item.num} className="px-0 md:px-10 py-10 first:md:pl-0 last:md:pr-0">
                <span className="text-[#c9956a]/20 text-5xl font-thin block mb-5 leading-none">{item.num}</span>
                <h3 className="text-lg font-light text-[#0f0f0f] mb-3 tracking-widest uppercase">{item.title}</h3>
                <div className="w-8 h-px bg-[#c9956a] mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#c9956a] text-3xl mb-4 font-serif">&ldquo;</div>
          <blockquote className="text-2xl md:text-3xl font-thin text-[#0f0f0f] leading-relaxed mb-6">
            She walks, looks around, and stops for the little things most people pass by.
          </blockquote>
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase">by Miriana</p>
        </div>
      </section>

      {/* ── CTA — Dark ── */}
      <section className="py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a1410_0%,_#0f0f0f_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9956a] text-[0.65rem] tracking-[0.5em] uppercase mb-6">Let&apos;s Work Together</p>
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 tracking-tight leading-tight">
            Capture What Matters
          </h2>
          <p className="text-white/30 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            This place, By Miriana, is like a visual diary &mdash; a gallery of nature, small details,
            and meaningful moments, captured with patience and heart.
          </p>
          <Link href="/contact" className="inline-block px-12 py-4 border border-[#c9956a] text-[#c9956a] text-xs tracking-[0.25em] uppercase hover:bg-[#c9956a] hover:text-white transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            On this page, Miriana shares the way she sees the world. She walks, looks around, and stops for the little things most people pass by — a rose opening in silence, light sliding through the leaves of a tree, a forgotten corner of a street.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="px-8 py-4 bg-[#d4a574] text-white rounded-full hover:bg-[#b88b5f] transition-all shadow-lg hover:shadow-xl text-lg font-medium">
              View Portfolio
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-[#d4a574] text-gray-900 rounded-full hover:bg-[#d4a574] hover:text-white transition-all text-lg font-medium">
              Book a Session
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
            Featured Work
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            A glimpse into recent projects and memorable captures
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[3/4] bg-gradient-to-br from-[#e8d5c4] to-[#d4a574] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-t from-[#b88b5f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-medium mb-1">Collection {i}</h3>
                  <p className="text-sm text-gray-200">View gallery →</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-block px-8 py-3 text-gray-900 border-2 border-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-white transition-all shadow-md hover:shadow-lg">
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f4] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
            What I Capture
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            While most people rush by, she stops and takes a photo. For her, the camera is not just a machine — it's a way to say: "This moment matters."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 hover:bg-white rounded-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#d4a574] to-[#b88b5f] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">Nature</h3>
              <p className="text-gray-600">
                The color of a rose on the sidewalk, the shape of a branch against the sky
              </p>
            </div>

            <div className="text-center p-8 hover:bg-white rounded-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#8b9dc3] to-[#6b7fa3] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">Moments</h3>
              <p className="text-gray-600">
                The way the sun warms a wall at the end of the day, light sliding through leaves
              </p>
            </div>

            <div className="text-center p-8 hover:bg-white rounded-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#e8d5c4] to-[#d4a574] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-gray-900">Stories</h3>
              <p className="text-gray-600">
                Small scenes that tell quiet stories, forgotten corners that hold memories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Capture What Matters
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            This place, By Miriana, is like a visual diary — a gallery of nature, small details, and meaningful moments, all captured with patience and heart.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-[#b88b5f] rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-lg hover:shadow-xl text-lg font-medium">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
