'use client';
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-white shadow sticky top-0 z-20">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">Pure Drive</Link>
      <div className="space-x-4">
        <Link href="/fleet" className="hover:underline">Fleet</Link>
        <Link href="/experience" className="hover:underline">Experience</Link>
        <Link href="/booking" className="hover:underline">Booking</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
