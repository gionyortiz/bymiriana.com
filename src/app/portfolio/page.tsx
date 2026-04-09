'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { photos, formatPhotoDate } from '@/data/photos';
import Lightbox from '@/components/Lightbox';

export default function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  const handlePhotoClick = (filename: string, alt: string) => {
    setSelectedPhoto(filename);
    setSelectedAlt(alt);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
    setSelectedAlt('');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="-mt-16 md:-mt-20 pt-32 md:pt-40 pb-16 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#c9956a] text-[0.65rem] tracking-[0.5em] uppercase mb-4">Visual Archive</p>
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/30 text-sm max-w-xl mx-auto tracking-wide">
            A collection of moments, details, and scenes — each one captured with intention and meaning
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {photos.map((photo, index) => (
              <div
                key={photo.filename}
                className="group relative aspect-[3/4] bg-[#f0ebe4] overflow-hidden cursor-pointer img-zoom"
                onClick={() => handlePhotoClick(photo.filename, photo.title || `Photography by Miriana - ${formatPhotoDate(photo.date)}`)}
              >
                <Image
                  src={`/photos/${photo.filename}`}
                  alt={photo.title || `Photography by Miriana - ${formatPhotoDate(photo.date)}`}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white/60 text-[0.6rem] tracking-[0.3em] uppercase mb-1">{formatPhotoDate(photo.date)}</p>
                  {photo.title && (
                    <p className="text-white text-sm font-light tracking-wide">{photo.title}</p>
                  )}
                  <p className="text-white/40 text-[0.6rem] mt-1 tracking-widest uppercase">&copy; byMiriana</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox 
        src={selectedPhoto ? `/photos/${selectedPhoto}` : ''}
        alt={selectedAlt}
        isOpen={!!selectedPhoto}
        onClose={handleClose}
      />

      {/* Call to Action */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9956a] text-[0.65rem] tracking-[0.5em] uppercase mb-4">Let&apos;s Connect</p>
          <h2 className="text-3xl md:text-5xl font-thin mb-6 text-white tracking-tight">
            See the World Through Her Eyes
          </h2>
          <p className="text-white/30 text-sm mb-10 tracking-wide">
            Each collection tells a story &mdash; quiet, honest, and full of feeling
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
