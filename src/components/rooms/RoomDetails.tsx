import React from 'react';
import { X, Users, MapPin, Wifi, Coffee, Tv, Bath } from 'lucide-react';

interface RoomDetailsProps {
  room: {
    id: number;
    type: string;
    price: number;
    capacity: number;
    location: string;
    image: string;
    available: boolean;
  };
  onClose: () => void;
}

export function RoomDetails({ room, onClose }: RoomDetailsProps) {
  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, name: "Free Wi-Fi" },
    { icon: <Coffee className="w-5 h-5" />, name: "Study Desk" },
    { icon: <Tv className="w-5 h-5" />, name: "Smart TV" },
    { icon: <Bath className="w-5 h-5" />, name: "Private Bathroom" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={room.image}
            alt={room.type}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{room.type}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Users className="w-5 h-5 mr-2" />
              <span>Capacity: {room.capacity} {room.capacity === 1 ? 'person' : 'people'}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{room.location}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  {amenity.icon}
                  <span className="ml-2">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                ${room.price}
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </p>
            </div>
            <button
              onClick={() => alert('Booking functionality would go here')}
              disabled={!room.available}
              className={`px-6 py-3 rounded-lg ${
                room.available
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {room.available ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}