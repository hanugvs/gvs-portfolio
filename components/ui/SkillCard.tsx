'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Layers,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Database,
  'Cloud & DevOps': Cloud,
  Architecture: Layers,
  'AI / GenAI': Sparkles,
};

interface SkillCardProps {
  skill: string;
  index?: number;
}

export const SkillChip: React.FC<SkillCardProps> = ({ skill, index = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="tag hover:border-cyan/40"
    >
      {skill}
    </motion.span>
  );
};

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export const SkillCategoryPanel: React.FC<SkillCategoryProps> = ({
  category,
  skills,
}) => {
  const Icon = iconMap[category] ?? Boxes;

  return (
    <div className="glass-panel rounded-2xl p-4 shadow-panel sm:p-5">
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan sm:h-10 sm:w-10">
          <Icon size={18} aria-hidden />
        </span>
        <h3 className="text-base font-semibold text-ink sm:text-lg">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillChip key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillChip;
