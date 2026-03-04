'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const { top } = aboutSection.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-lg">
            <p className="mb-4">
              I am a Senior Frontend / Full Stack Developer with 12+ years
              experience building enterprise-grade applications for banking and
              large enterprises. I focus on performance, security, and
              maintainability.
            </p>
            <ul className="list-disc list-inside space-y-2 muted">
              <li>React, Angular, Next.js</li>
              <li>Node.js, MySQL, MongoDB</li>
              <li>Micro-frontends & microservices</li>
              <li>AWS (S3, Lambda, CloudFront)</li>
              <li>AI integrations (OpenAI APIs)</li>
            </ul>
          </div>
          <div className="glass p-4 rounded-lg">
            <h4 className="font-semibold">Approach</h4>
            <p className="muted mt-2">
              I design scalable systems with clear boundaries, observability,
              and automated delivery pipelines. I partner closely with product
              and security teams to ship reliable software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
