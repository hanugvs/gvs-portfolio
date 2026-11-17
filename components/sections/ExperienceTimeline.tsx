'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../../data/experience';
import type { Experience } from '../../types';
import SectionHeading from '../ui/SectionHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ExperienceTimeline: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !trackRef.current) return;

    const line = trackRef.current.querySelector('[data-timeline-line]');
    if (!line) return;

    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduceMotion]);

  return (
    <section id="experience" className="py-8 sm:py-10 lg:py-12">
      <div className="section-shell">
        <SectionHeading
          label="Career"
          title="Experience"
          description="A path through enterprise and banking platforms—preserving every role, tenure, and impact delivered."
        />

        <div ref={trackRef} className="relative mx-auto max-w-4xl">
          <div
            aria-hidden
            className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-cyan via-blue-accent to-violet-accent/60 md:left-1/2 md:-translate-x-1/2"
            data-timeline-line
          />

          <ol className="space-y-5 sm:space-y-6">
            {experience.map((item: Experience, index: number) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="relative grid gap-3 md:grid-cols-2 md:gap-10"
                >
                  <div
                    className="absolute left-[7px] top-5 h-2.5 w-2.5 rounded-full border-2 border-cyan bg-[#070b14] md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  />

                  <div
                    className={`pl-9 md:pl-0 ${
                      isLeft
                        ? 'md:pr-10 md:text-right'
                        : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <p className="font-mono-accent text-xs text-cyan">
                      {item.duration}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-ink sm:text-xl">
                      {item.company}
                    </h3>
                    <p className="muted mt-1 text-sm">{item.role}</p>
                  </div>

                  <div
                    className={`pl-9 md:pl-0 ${
                      isLeft
                        ? 'md:col-start-2 md:pl-10'
                        : 'md:col-start-1 md:row-start-1 md:pr-10'
                    }`}
                  >
                    <div className="glass-panel rounded-2xl p-4 shadow-panel sm:p-5">
                      <ul className="space-y-2">
                        {item.impactPoints.map(point => (
                          <li
                            key={point}
                            className="flex gap-2 text-sm leading-relaxed text-ink/85"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                            <span className="min-w-0 break-words">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
