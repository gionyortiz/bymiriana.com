import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - byMiriana',
  description: 'Browse through my photography collections featuring portraits, weddings, events, and more.',
};

const portfolioCategories = [
  { id: 'nature', title: 'Nature', description: 'Flowers, trees, and organic beauty', count: 24 },
  { id: 'light', title: 'Light & Shadow', description: 'The poetry of sunlight and shade', count: 18 },
  { id: 'streets', title: 'Streets & Places', description: 'Corners, walls, and forgotten spaces', count: 15 },
  { id: 'details', title: 'Details', description: 'The small things that matter', count: 32 },
  { id: 'seasons', title: 'Seasons', description: 'Nature changing through the year', count: 21 },
  { id: 'memories', title: 'Memories', description: 'Nostalgic and emotional captures', count: 12 },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 gradient-soft">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A collection of moments, details, and scenes — each one captured with intention and meaning
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCategories.map((category) => (
              <Link 
                key={category.id}
                href={`/portfolio/${category.id}`}
                className="group"
              >
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#e8d5c4] to-[#d4a574] rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-xl transition-all">
                  {/* Placeholder for category image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] to-[#b88b5f] group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-2xl font-light">{category.count} Photos</span>
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-gray-900 mb-2 group-hover:text-[#b88b5f] transition-colors">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
            See the World Through Her Eyes
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Each collection tells a story — quiet, honest, and full of feeling
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
