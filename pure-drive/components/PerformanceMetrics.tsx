'use client';
import React from 'react';
import { Car } from '../types/car';

interface Props {
  cars: Car[];
}

const PerformanceMetrics: React.FC<Props> = ({ cars }) => (
  <section className="overflow-x-auto py-8 bg-gray-100">
    <div className="flex space-x-6 px-4">
      {cars.map((car) => (
        <div key={car.id} className="min-w-[250px] bg-white p-4 rounded-lg shadow text-center">
          <h4 className="font-semibold mb-2">{car.name}</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>0-100 km/h: {car.acceleration}s</p>
            <p>HP: {car.horsepower}</p>
            <p>Top Speed: {car.topSpeed} km/h</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PerformanceMetrics;
