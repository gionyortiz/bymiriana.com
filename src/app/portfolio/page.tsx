import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - byMiriana',
  description: 'Browse through my photography collections featuring portraits, weddings, events, and more.',
};

// Array of your photos
const photos = [
  '05675462-881d-496f-b01b-bb8705cfb66a.JPG',
  '38ee7e07-c139-482f-98fc-256e5994317c.JPG',
  '3d142ea6-86ba-4a7e-939a-9df1ada3593c.JPG',
  '3d3fa74e-da81-4a4f-909c-34c393d196dc.JPG',
  '3fdb3f09-4d82-44c3-a47e-963a28451fc9.JPG',
  '4c882c6f-7d71-4f67-aaec-5f2a82a91cb8.JPG',
  '5023f375-30b5-4536-af1c-400db3fc944a.JPG',
  '5a1a4aaf-9fbc-41a8-839d-ebb5eb988c55.JPG',
  '64d843c8-864f-49ba-aba9-c97240143de1.JPG',
  '6fefc1f4-cb5a-4506-b0aa-97e18994931d.JPG',
  '7b6c7c56-781a-4b97-b686-32c8ca741f56.JPG',
  '8cbda18a-dd0a-4e5e-a9b3-741bf8585079.JPG',
  'a25407c2-e4bc-455b-a7e0-ce7ded18fb87.JPG',
  'a9d736e7-a87e-4392-84d5-1ca6e21aed64.JPG',
  'c7de4039-510d-4339-a441-2ef0d82701e9.JPG',
  'ec5a9b70-39f3-49e8-b1ac-92abd325c6b1.JPG',
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

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={photo}
                className="group relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <Image
                  src={`/photos/${photo}`}
                  alt={`Photography by Miriana - ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {/* Copyright watermark */}
                <div className="absolute bottom-4 right-4 text-white text-xs bg-black/50 px-2 py-1 rounded">
                  © byMiriana
                </div>
              </div>
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
