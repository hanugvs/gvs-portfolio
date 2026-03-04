'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';
import { experience } from '../../data/experience';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        <div className="relative">
          {experience.map((item: Experience, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10"
            >
              <div className="flex items-center">
                <div className="w-1/4 text-right pr-4">
                  <span className="block text-lg font-semibold">
                    {item.company}
                  </span>
                  <span className="block text-sm text-gray-400">
                    {item.role}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {item.duration}
                  </span>
                </div>
                <div className="w-3/4">
                  <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                    <p>{item.description}</p>
                    <ul className="mt-2">
                      {item.impactPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-300">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
