"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import Card from '../ui/Card';

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;