'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;
