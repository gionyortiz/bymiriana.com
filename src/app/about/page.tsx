import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - byMiriana',
  description: 'Learn more about Miriana, a professional photographer passionate about capturing life\'s beautiful moments.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative aspect-[3/4] bg-gradient-to-br from-[#e8d5c4] to-[#d4a574] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] to-[#b88b5f]" />
            </div>

            {/* Bio Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
                About By Miriana
              </h1>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Miriana has a simple habit: wherever she goes, she pays attention.
                  To the color of a rose on the sidewalk.
                  To the shape of a branch against the sky.
                  To the way the sun warms a wall at the end of the day.
                </p>
                <p>
                  While most people rush by, she stops and takes a photo. For her, the camera is not just a machine — it's a way to say: <em>"This moment matters."</em>
                </p>
                <p>
                  <strong>By Miriana</strong> is her space to share those moments.
                  Here you'll find nature, streets, trees, flowers, and small scenes that tell quiet stories. Some photos feel calm, some emotional, some nostalgic — but all of them are honest.
                </p>
                <p>
                  Little by little, this page will grow into a collection of memories and feelings, so that anyone who visits can slow down for a moment and see the world through her eyes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-6 text-gray-900">
            A Visual Journey
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            She captures what others don't stop to see — nature, moments, and feelings, all in a single frame.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">∞</div>
              <p className="text-gray-600">Moments Captured</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">❤️</div>
              <p className="text-gray-600">With Patience & Heart</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">🌿</div>
              <p className="text-gray-600">Nature & Details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-12 text-gray-900">
            What You'll Find Here
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-[#d4a574] pl-6 hover:bg-[#faf7f4] p-4 rounded-r-lg transition-all">
              <h3 className="text-2xl font-medium mb-2 text-gray-900">Nature & Flowers</h3>
              <p className="text-gray-600">
                Roses, trees, branches, and gardens — captured in their quiet beauty, revealing details that often go unnoticed.
              </p>
            </div>

            <div className="border-l-4 border-[#8b9dc3] pl-6 hover:bg-[#faf7f4] p-4 rounded-r-lg transition-all">
              <h3 className="text-2xl font-medium mb-2 text-gray-900">Streets & Corners</h3>
              <p className="text-gray-600">
                Forgotten places, sunlight on walls, the poetry of everyday scenes that tell stories without words.
              </p>
            </div>

            <div className="border-l-4 border-[#d4a574] pl-6 hover:bg-[#faf7f4] p-4 rounded-r-lg transition-all">
              <h3 className="text-2xl font-medium mb-2 text-gray-900">Light & Shadow</h3>
              <p className="text-gray-600">
                The way light moves through leaves, warms a surface, or creates shapes — moments of pure atmosphere.
              </p>
            </div>

            <div className="border-l-4 border-[#8b9dc3] pl-6 hover:bg-[#faf7f4] p-4 rounded-r-lg transition-all">
              <h3 className="text-2xl font-medium mb-2 text-gray-900">Feelings & Memories</h3>
              <p className="text-gray-600">
                Photos that evoke emotions — calm, nostalgia, warmth, peace — preserved so they won't fade away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
            Slow Down & See
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visit this space whenever you need to pause, breathe, and remember that beauty lives in the small, quiet things.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-[#d4a574] text-white rounded-full hover:bg-[#b88b5f] transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
