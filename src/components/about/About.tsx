import React from 'react';
import { Award, Users, Shield, Coffee } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Accommodation",
      description: "Modern, well-maintained rooms designed for student comfort and productivity."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Vibrant Community",
      description: "Join a diverse community of students from around the world."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "24/7 Security",
      description: "Round-the-clock security services for your peace of mind."
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: "Common Areas",
      description: "Spacious common rooms and study areas for socializing and learning."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About UniHostel</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Since 1990, we've been providing students with a comfortable and secure living environment
            that feels like home while supporting their academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}