import React from 'react';

interface FilterProps {
  filters: {
    type: string;
    minPrice: number;
    maxPrice: number;
    available: boolean;
  };
  onFilterChange: (filters: any) => void;
}

export function RoomFilter({ filters, onFilterChange }: FilterProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Room Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Dormitory">Dormitory</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Min Price
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.minPrice}
            onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
            className="w-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">${filters.minPrice}</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Max Price
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">${filters.maxPrice}</span>
        </div>

        <div className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.available}
              onChange={(e) => onFilterChange({ ...filters, available: e.target.checked })}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Available Only
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}