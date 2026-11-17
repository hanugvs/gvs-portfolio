'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Stars } from '@react-three/drei';
import type { Group } from 'three';
import WorkspaceModel from './WorkspaceModel';
import FloatingPanels from './FloatingPanels';

const SceneContent: React.FC = () => {
  const group = useRef<Group>(null);

  useFrame(state => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = x * 0.18;
    group.current.rotation.x = -y * 0.08;
  });

  return (
    <>
      <color attach="background" args={['#070b14']} />
      <fog attach="fog" args={['#070b14', 8, 18]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={0.7} color="#22d3ee" />
      <pointLight position={[3, 1.5, 1]} intensity={0.45} color="#6366f1" />
      <Stars
        radius={40}
        depth={30}
        count={1200}
        factor={2}
        saturation={0}
        fade
        speed={0.4}
      />

      <group ref={group}>
        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.25}>
          <WorkspaceModel />
        </Float>
        <FloatingPanels />
      </group>

      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.45}
        scale={8}
        blur={2.4}
        far={4}
      />
    </>
  );
};

const WorkspaceScene: React.FC = () => {
  return (
    <div className="h-full w-full" aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 1.4, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WorkspaceScene;
