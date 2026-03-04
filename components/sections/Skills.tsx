import React from 'react';
import { skills } from '../../data/skills';
import MotionWrapper from '../MotionWrapper';

const Skills: React.FC = () => {
  return (
    <MotionWrapper>
      <section id="skills" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(cat => (
              <div key={cat.category} className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Skills;
