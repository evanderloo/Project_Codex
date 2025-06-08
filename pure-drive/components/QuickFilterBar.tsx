'use client';
import React from 'react';

const QuickFilterBar: React.FC = () => {
  return (
    <div className="sticky top-0 bg-white z-10 shadow overflow-x-auto whitespace-nowrap py-2 px-4 flex space-x-4">
      <button className="px-4 py-2 bg-gray-200 rounded-full">Cabriolet</button>
      <button className="px-4 py-2 bg-gray-200 rounded-full">Sport</button>
      <button className="px-4 py-2 bg-gray-200 rounded-full">Supercar</button>
      <input type="range" min="100" max="1000" className="w-32" />
      <button className="px-4 py-2 bg-gray-200 rounded-full">Rating</button>
      <input type="date" className="px-2 py-1 border rounded" />
    </div>
  );
};

export default QuickFilterBar;
