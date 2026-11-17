'use client';

import React from 'react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-8 sm:py-10 lg:py-12">
      <div className="section-shell">
        <SectionHeading
          label="Selected work"
          title="Featured Projects"
          description="Case studies across enterprise, banking, and commerce platforms—built for scale, security, and delivery."
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
