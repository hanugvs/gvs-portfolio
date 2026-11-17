'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import WorkspaceFallback from './WorkspaceFallback';

const WorkspaceScene = dynamic(() => import('./WorkspaceScene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-[#0b1424]">
      <div className="h-10 w-10 animate-pulse rounded-full border-2 border-cyan/40 border-t-cyan" />
    </div>
  ),
});

const SceneLoader: React.FC = () => {
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 768px)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqCoarse = window.matchMedia('(pointer: coarse)');

    const evaluate = () => {
      setUse3D(mqDesktop.matches && !mqReduced.matches && !mqCoarse.matches);
    };

    evaluate();
    mqDesktop.addEventListener('change', evaluate);
    mqReduced.addEventListener('change', evaluate);
    mqCoarse.addEventListener('change', evaluate);

    return () => {
      mqDesktop.removeEventListener('change', evaluate);
      mqReduced.removeEventListener('change', evaluate);
      mqCoarse.removeEventListener('change', evaluate);
    };
  }, []);

  if (!use3D) {
    return <WorkspaceFallback />;
  }

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] lg:h-[520px]">
      <WorkspaceScene />
    </div>
  );
};

export default SceneLoader;
