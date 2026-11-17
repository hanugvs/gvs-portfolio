'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SceneLoader from '../three/SceneLoader';

const chips = ['React', 'Next.js', 'Angular', 'Node.js', 'AWS', 'GenAI'];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-24 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <div className="ambient-orb left-[-10%] top-10 h-64 w-64 bg-cyan/30" />
      <div className="ambient-orb right-[-5%] top-32 h-72 w-72 bg-blue-accent/25" />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="section-label">Senior Frontend / Full Stack Engineer</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            G. Vannur
          </h1>
          <p className="max-w-xl text-lg text-ink/90 sm:text-xl">
            Building scalable banking, enterprise &amp; AI-powered web
            applications.
          </p>
          <p className="muted max-w-xl text-base leading-relaxed">
            12+ years building secure, performant, and accessible applications
            for banking and enterprise customers. Focused on React, Angular,
            Next.js, and Node.js platforms.
          </p>

          <div className="flex flex-wrap gap-2">
            {chips.map(chip => (
              <span key={chip} className="tag">
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="btn-primary no-underline">
              Explore My Work
            </a>
            <a href="#contact" className="btn-secondary no-underline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative min-h-[280px]"
        >
          <SceneLoader />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
