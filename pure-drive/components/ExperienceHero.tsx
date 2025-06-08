'use client';
import React from 'react';
import Link from 'next/link';

const experiences = [
  {
    title: 'Alpine Hotel Escape',
    video: '/videos/experience-showcase.mp4',
    href: '/experience',
  },
  {
    title: 'Furka Pass Thrill',
    video: '/videos/experience-showcase.mp4',
    href: '/experience',
  },
  {
    title: 'City Night Drive',
    video: '/videos/experience-showcase.mp4',
    href: '/experience',
  },
];

const ExperienceHero: React.FC = () => (
  <section className="w-full overflow-x-auto py-10 bg-gray-900 text-white" id="experiences">
    <div className="flex space-x-6 px-4">
      {experiences.map((exp) => (
        <div key={exp.title} className="relative min-w-[300px] h-64 rounded-lg overflow-hidden shadow-lg">
          <video className="absolute inset-0 w-full h-full object-cover" src={exp.video} autoPlay muted loop playsInline />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <Link href={exp.href} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
              View Experience
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceHero;
