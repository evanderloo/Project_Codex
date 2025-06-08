'use client';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-8 mt-16">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-semibold mb-2">Pure Drive</h4>
        <p>Switzerland</p>
        <p>Email: info@puredrive.ch</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Links</h4>
        <ul className="space-y-1">
          <li><Link href="/fleet" className="hover:underline">Fleet</Link></li>
          <li><Link href="/experience" className="hover:underline">Experiences</Link></li>
          <li><Link href="/booking" className="hover:underline">Booking</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className="flex space-x-2">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
