'use client';
import React from 'react';
import { Car } from '../types/car';

interface Props {
  cars: Car[];
}

const BookingPreview: React.FC<Props> = ({ cars }) => (
  <section className="p-4 bg-white rounded-lg shadow space-y-4">
    <h3 className="text-xl font-semibold">Quick Booking</h3>
    <input type="date" className="border p-2 rounded w-full" />
    <select className="border p-2 rounded w-full">
      {cars.map((car) => (
        <option key={car.id} value={car.id}>
          {car.name}
        </option>
      ))}
    </select>
    <button className="w-full bg-red-600 text-white py-2 rounded-md">Estimate Price</button>
  </section>
);

export default BookingPreview;
