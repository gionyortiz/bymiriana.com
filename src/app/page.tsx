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