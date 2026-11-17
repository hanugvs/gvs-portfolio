'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Landmark, ShoppingBag } from 'lucide-react';
import type { Project, ProjectCategory } from '../../types';

const categoryIcon: Record<ProjectCategory, React.ElementType> = {
  Enterprise: Building2,
  Banking: Landmark,
  'E-commerce': ShoppingBag,
};

const categoryTone: Record<ProjectCategory, string> = {
  Enterprise: 'from-cyan/25 via-blue-accent/10 to-transparent',
  Banking: 'from-blue-accent/30 via-cyan/10 to-transparent',
  'E-commerce': 'from-violet-accent/30 via-blue-accent/10 to-transparent',
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const Icon = categoryIcon[project.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group glass-panel relative overflow-hidden rounded-2xl shadow-panel"
    >
      <div
        className={`relative h-36 bg-gradient-to-br ${
          categoryTone[project.category]
        }`}
        aria-hidden
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-6 top-6 h-16 w-24 rounded-lg border border-white/15 bg-white/5" />
          <div className="absolute bottom-5 right-8 h-10 w-16 rounded-md border border-cyan/20 bg-cyan/10" />
          <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-cyan animate-pulse-soft" />
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-ink backdrop-blur">
          <Icon size={14} aria-hidden />
          {project.category}
        </div>
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink sm:text-xl">
            {project.title}
          </h3>
          {project.link && project.link !== '#' ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1 text-muted transition group-hover:text-cyan"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight size={18} />
            </a>
          ) : null}
        </div>
        <p className="muted text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
