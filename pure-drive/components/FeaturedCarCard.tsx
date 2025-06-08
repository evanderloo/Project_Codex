'use client';
import React from 'react';
import { Car } from '../types/car';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  car: Car;
}

const FeaturedCarCard: React.FC<Props> = ({ car }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
    <Image src={car.image} alt={car.name} width={400} height={250} className="w-full h-48 object-cover" />
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold">{car.name}</h3>
      <p className="text-sm text-gray-600">{car.horsepower} HP · {car.topSpeed} km/h</p>
      <p className="text-sm text-gray-600">0-100 km/h in {car.acceleration}s</p>
      <p className="font-bold">CHF {car.dailyRate}/day</p>
      <Link href={`/booking?car=${car.id}`} className="block text-center bg-red-600 text-white py-2 rounded-md">Book Now</Link>
    </div>
  </div>
);

export default FeaturedCarCard;
