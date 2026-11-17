'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  {
    label: 'Years of experience',
    value: 12,
    suffix: '+',
    detail: 'Frontend & full-stack engineering',
  },
  {
    label: 'Domain focus',
    value: null,
    text: 'Enterprise / Banking',
    detail: 'Secure, high-availability platforms',
  },
  {
    label: 'Stack depth',
    value: null,
    text: 'Full-stack',
    detail: 'React, Angular, Next.js, Node.js',
  },
  {
    label: 'Modern capabilities',
    value: null,
    text: 'AI integrations',
    detail: 'OpenAI APIs & LLM workflows',
  },
];

const About: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [years, setYears] = useState(reduceMotion ? 12 : 0);

  useEffect(() => {
    if (reduceMotion) {
      setYears(12);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setYears(Math.round(progress * 12));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          label="About"
          title="About Me"
          description="Senior Frontend / Full Stack Developer focused on performance, security, and maintainability."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-ink/90">
              I am a Senior Frontend / Full Stack Developer with 12+ years
              experience building enterprise-grade applications for banking and
              large enterprises. I focus on performance, security, and
              maintainability.
            </p>
            <ul className="space-y-2 muted">
              <li>React, Angular, Next.js</li>
              <li>Node.js, MySQL, MongoDB</li>
              <li>Micro-frontends &amp; microservices</li>
              <li>AWS (S3, Lambda, CloudFront)</li>
              <li>AI integrations (OpenAI APIs)</li>
            </ul>
            <div className="glass-panel rounded-2xl p-5">
              <h3 className="text-base font-semibold text-ink">Approach</h3>
              <p className="muted mt-2 text-sm leading-relaxed sm:text-base">
                I design scalable systems with clear boundaries, observability,
                and automated delivery pipelines. I partner closely with product
                and security teams to ship reliable software.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-panel rounded-2xl p-5"
              >
                <p className="section-label !tracking-[0.14em]">{item.label}</p>
                <p className="mt-3 font-display text-3xl font-bold text-ink">
                  {item.value !== null ? (
                    <>
                      {years}
                      {item.suffix}
                    </>
                  ) : (
                    item.text
                  )}
                </p>
                <p className="muted mt-2 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
