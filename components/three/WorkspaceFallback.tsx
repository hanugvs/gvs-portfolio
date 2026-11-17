'use client';

import React from 'react';

const WorkspaceFallback: React.FC = () => {
  return (
    <div
      className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1424]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -right-8 bottom-6 h-36 w-36 rounded-full bg-blue-accent/25 blur-3xl" />

      <div className="absolute inset-x-8 bottom-10 h-3 rounded-md bg-white/10" />
      <div className="absolute left-1/2 top-10 h-28 w-44 -translate-x-1/2 rounded-lg border border-cyan/30 bg-cyan/10 shadow-glow" />
      <div className="absolute left-8 top-16 h-20 w-28 rotate-[-8deg] rounded-md border border-white/15 bg-white/5" />
      <div className="absolute right-8 top-14 h-20 w-28 rotate-[8deg] rounded-md border border-violet-accent/30 bg-violet-accent/10" />

      <div className="absolute left-10 top-8 animate-float rounded-md border border-white/10 bg-[#0c1628]/90 px-3 py-2 font-mono text-[10px] text-cyan">
        next build ✓
      </div>
      <div
        className="absolute right-10 top-24 animate-float rounded-md border border-white/10 bg-[#0c1628]/90 px-3 py-2 font-mono text-[10px] text-blue-300"
        style={{ animationDelay: '1.2s' }}
      >
        llm.stream()
      </div>
    </div>
  );
};

export default WorkspaceFallback;
