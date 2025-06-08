'use client';
import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  description: string;
}

const ExperienceCard: React.FC<Props> = ({ title, image, description }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 space-y-2">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <Link href="/experience" className="text-red-600 hover:underline block">
        Discover
      </Link>
    </div>
  </div>
);

export default ExperienceCard;
