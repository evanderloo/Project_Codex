'use client';
import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => (
  <section className="relative py-16 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}>
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative max-w-2xl mx-auto text-center text-white space-y-4 px-4">
      <h2 className="text-2xl md:text-4xl font-bold">Join the Pure Drive Club</h2>
      <p>Member benefits, exclusive offers, unforgettable journeys.</p>
      <Link href="/booking" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md">
        Book Now
      </Link>
    </div>
  </section>
);

export default CallToAction;
