'use client';
import React from 'react';
import Link from 'next/link';

const HeroVideo: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/landing-drive.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
          Experience the Drive of Your Dreams
        </h1>
        <div className="flex space-x-4">
          <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition">
            Book Your Experience
          </Link>
          <Link href="/fleet" className="bg-white/80 hover:bg-white text-gray-900 px-6 py-3 rounded-md transition">
            Explore Our Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
