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

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={photo.filename}
                className="group relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => handlePhotoClick(photo.filename, photo.title || `Photography by Miriana - ${formatPhotoDate(photo.date)}`)}
              >
                <Image
                  src={`/photos/${photo.filename}`}
                  alt={photo.title || `Photography by Miriana - ${formatPhotoDate(photo.date)}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {/* Date and copyright overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-xs mb-1">{formatPhotoDate(photo.date)}</p>
                  {photo.title && (
                    <p className="text-white text-sm font-medium">{photo.title}</p>
                  )}
                  <p className="text-white/80 text-xs mt-1">© byMiriana</p>
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
