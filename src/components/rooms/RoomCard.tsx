import React from 'react';
import { Bed, Users, MapPin, ArrowRight } from 'lucide-react';

interface RoomCardProps {
  type: string;
  price: number;
  capacity: number;
  location: string;
  image: string;
  available: boolean;
  onSelect: () => void;
}

export function RoomCard({
  type,
  price,
  capacity,
  location,
  image,
  available,
  onSelect
}: RoomCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={image}
          alt={type}
          className="w-full h-full object-cover"
        />
        {!available && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1">
            Booked
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{type}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="w-5 h-5 mr-2" />
            <span>Capacity: {capacity} {capacity === 1 ? 'person' : 'people'}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${price}<span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
          </p>
          <button
            onClick={onSelect}
            disabled={!available}
            className={`flex items-center px-4 py-2 rounded-lg ${
              available
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="mr-2">Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}