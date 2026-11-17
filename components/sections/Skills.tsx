'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import { SkillCategoryPanel, SkillChip } from '../ui/SkillCard';

const Skills: React.FC = () => {
  const [active, setActive] = useState('All');
  const categories = ['All', ...skills.map(s => s.category)];
  const activeCategory = skills.find(s => s.category === active);

  return (
    <section id="skills" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          label="Capabilities"
          title="Skills"
          description="A practical stack spanning frontend platforms, backend services, cloud delivery, architecture, and GenAI integrations."
        />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map(category => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(category)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  selected
                    ? 'bg-cyan/15 text-cyan ring-1 ring-cyan/40'
                    : 'bg-white/5 text-ink/70 hover:bg-white/8 hover:text-ink'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <AnimatePresence exitBeforeEnter>
          {active === 'All' ? (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {skills.map(cat => (
                <SkillCategoryPanel
                  key={cat.category}
                  category={cat.category}
                  skills={cat.skills}
                />
              ))}
            </motion.div>
          ) : activeCategory ? (
            <motion.div
              key={activeCategory.category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="glass-panel rounded-2xl p-6 shadow-panel"
            >
              <h3 className="mb-4 text-xl font-semibold text-ink">
                {activeCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeCategory.skills.map((skill, index) => (
                  <SkillChip key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
