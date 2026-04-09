import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - byMiriana',
  description: 'Learn more about Miriana, a professional photographer passionate about capturing life\'s beautiful moments.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="-mt-16 md:-mt-20 pt-32 md:pt-40 pb-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile image placeholder */}
            <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a201a] to-[#0f0f0f]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 text-8xl font-thin tracking-widest">M</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9956a] to-transparent opacity-40" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[#c9956a] text-[0.65rem] tracking-[0.5em] uppercase mb-4">The Photographer</p>
              <h1 className="text-5xl md:text-6xl font-thin tracking-tight text-white mb-8">
                About<br /><span className="font-serif italic text-[#c9956a]">byMiriana</span>
              </h1>
              <div className="space-y-5 text-white/50 text-sm leading-relaxed">
                <p>
                  Miriana has a simple habit: wherever she goes, she pays attention.
                  To the color of a rose on the sidewalk. To the shape of a branch against the sky.
                  To the way the sun warms a wall at the end of the day.
                </p>
                <p>
                  While most people rush by, she stops and takes a photo. For her, the camera is not just
                  a machine &mdash; it&apos;s a way to say: <em className="text-white/70">&ldquo;This moment matters.&rdquo;</em>
                </p>
                <p>
                  <strong className="text-white/70 font-medium">byMiriana</strong> is her space to share those moments.
                  Here you&apos;ll find nature, streets, trees, flowers, and small scenes that tell quiet stories.
                  Some photos feel calm, some emotional, some nostalgic &mdash; but all of them are honest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { symbol: '∞', label: 'Moments Captured' },
              { symbol: '♥', label: 'With Patience & Heart' },
              { symbol: '≋', label: 'Nature & Details' },
            ].map((item) => (
              <div key={item.label} className="text-center py-10 px-8">
                <div className="text-4xl font-thin text-[#c9956a] mb-3">{item.symbol}</div>
                <p className="text-gray-400 text-xs tracking-[0.2em] uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Find ── */}
      <section className="py-24 bg-[#f8f5f1]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9956a] text-[0.65rem] tracking-[0.4em] uppercase mb-3">Collections</p>
            <h2 className="text-4xl font-thin text-[#0f0f0f]">What You&apos;ll Find Here</h2>
          </div>

          <div className="space-y-0 divide-y divide-gray-200">
            {[
              { num: '01', title: 'Nature & Flowers', desc: 'Roses, trees, branches, and gardens — captured in their quiet beauty, revealing details that often go unnoticed.' },
              { num: '02', title: 'Streets & Corners', desc: 'Forgotten places, sunlight on walls, the poetry of everyday scenes that tell stories without words.' },
              { num: '03', title: 'Light & Shadow', desc: 'The way light moves through leaves, warms a surface, or creates shapes — moments of pure atmosphere.' },
              { num: '04', title: 'Feelings & Memories', desc: 'Photos that evoke emotions — calm, nostalgia, warmth, peace — preserved so they won\'t fade away.' },
            ].map((item) => (
              <div key={item.num} className="group flex items-start gap-8 py-8 hover:bg-white/70 px-4 transition-colors">
                <span className="text-[#c9956a]/30 text-2xl font-thin shrink-0 pt-1">{item.num}</span>
                <div>
                  <h3 className="text-lg font-light text-[#0f0f0f] mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9956a] text-[0.65rem] tracking-[0.5em] uppercase mb-5">Connect</p>
          <h2 className="text-3xl md:text-5xl font-thin mb-6 text-white tracking-tight">
            Slow Down &amp; See
          </h2>
          <p className="text-white/30 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Visit this space whenever you need to pause, breathe, and remember that beauty lives in the small, quiet things.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-[#c9956a] text-[#c9956a] text-xs tracking-[0.25em] uppercase hover:bg-[#c9956a] hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
