"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4">
            <Image src="/images/my_photo.jpg" alt="G. Vannur" width={112} height={112} className="rounded-full object-cover" />
            <div>
              <h1 className="text-3xl font-bold">G. Vannur</h1>
              <h2 className="muted">Senior Frontend & Full Stack Engineer | ReactJs | Angular | Node</h2>
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-semibold">Building scalable banking, enterprise & AI-powered web applications.</h2>

          <p className="mt-4 muted max-w-prose">
            12+ years building secure, performant, and accessible applications for banking and enterprise customers.
          </p>

        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-lg font-medium">Quick Highlights</h3>
            <ul className="mt-4 space-y-2 muted">
              <li>12+ years experience in frontend & full-stack engineering</li>
              <li>Expertise in React, Angular, Next.js, Node.js</li>
              <li>Micro-frontends, microservices & AWS</li>
              <li>AI integrations with OpenAI APIs</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;