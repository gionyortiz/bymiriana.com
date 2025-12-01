import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-soft">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6">
            by<span className="font-serif italic text-[#b88b5f]">Miriana</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto font-serif italic">
            "Nature, moments, and meaning — through Miriana's eyes."
          </p>
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
