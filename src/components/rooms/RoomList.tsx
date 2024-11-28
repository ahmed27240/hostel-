import React, { useState } from 'react';
import { RoomCard } from './RoomCard';
import { RoomFilter } from './RoomFilter';
import { RoomDetails } from './RoomDetails';

const ROOMS = [
  {
    id: 1,
    type: 'Single Room',
    price: 500,
    capacity: 1,
    location: 'Block A',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    available: true,
  },
  {
    id: 2,
    type: 'Double Room',
    price: 400,
    capacity: 2,
    location: 'Block B',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    available: true,
  },
  {
    id: 3,
    type: 'Dormitory',
    price: 300,
    capacity: 4,
    location: 'Block C',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    available: false,
  },
];

export function RoomList() {
  const [filters, setFilters] = useState({
    type: 'all',
    minPrice: 0,
    maxPrice: 1000,
    available: false,
  });

  const [selectedRoom, setSelectedRoom] = useState<typeof ROOMS[0] | null>(null);

  const filteredRooms = ROOMS.filter(room => {
    if (filters.type !== 'all' && room.type !== filters.type) return false;
    if (room.price < filters.minPrice || room.price > filters.maxPrice) return false;
    if (filters.available && !room.available) return false;
    return true;
  });

  return (
    <section id="rooms" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Available Accommodations
        </h2>
        
        <RoomFilter filters={filters} onFilterChange={setFilters} />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            <RoomCard
              key={room.id}
              {...room}
              onSelect={() => setSelectedRoom(room)}
            />
          ))}
        </div>

        {selectedRoom && (
          <RoomDetails
            room={selectedRoom}
            onClose={() => setSelectedRoom(null)}
          />
        )}
      </div>
    </section>
  );
}