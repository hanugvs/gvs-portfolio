'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
}) => {
  const alignment =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="muted text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
