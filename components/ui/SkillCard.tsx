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
    <div className="glass-panel rounded-2xl p-6 shadow-panel">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
          <Icon size={18} aria-hidden />
        </span>
        <h3 className="text-lg font-semibold text-ink">{category}</h3>
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
