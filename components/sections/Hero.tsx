'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const chips = ['React', 'Next.js', 'Angular', 'Node.js', 'AWS', 'GenAI'];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-6 pt-20 sm:pb-8 sm:pt-24 lg:pb-10 lg:pt-28"
    >
      <div className="ambient-orb left-[-10%] top-10 h-64 w-64 bg-cyan/30" />
      <div className="ambient-orb right-[-5%] top-32 h-72 w-72 bg-blue-accent/25" />

      <div className="section-shell relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 space-y-4 lg:order-1 lg:space-y-5"
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

          <div className="flex flex-wrap gap-3 pt-1">
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
          className="order-1 mx-auto w-full max-w-[200px] sm:max-w-[260px] lg:order-2 lg:mx-0 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[360px] lg:ml-auto">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-cyan/30 via-blue-accent/20 to-violet-accent/20 blur-xl sm:-inset-3 sm:rounded-[2rem]"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b1424] shadow-panel sm:rounded-[1.75rem]">
              <Image
                src="/images/my_photo.jpg"
                alt="G. Vannur"
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 360px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
