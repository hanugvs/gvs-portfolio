'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import type { Group } from 'three';

const Panel: React.FC<{
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  title: string;
  lines: string[];
  floatOffset?: number;
}> = ({
  position,
  rotation = [0, 0, 0],
  color,
  title,
  lines,
  floatOffset = 0,
}) => {
  const ref = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() + floatOffset;
    ref.current.position.y = position[1] + Math.sin(t * 0.9) * 0.08;
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.03;
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[1.35, 0.9]} />
        <meshStandardMaterial
          color="#0b1424"
          transparent
          opacity={0.88}
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.28, 0.82]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.12}
        />
      </mesh>
      <Text
        position={[-0.52, 0.28, 0.02]}
        fontSize={0.08}
        color={color}
        anchorX="left"
        anchorY="middle"
        maxWidth={1.1}
      >
        {title}
      </Text>
      {lines.map((line, i) => (
        <Text
          key={line}
          position={[-0.52, 0.12 - i * 0.12, 0.02]}
          fontSize={0.055}
          color="#c8d6ea"
          anchorX="left"
          anchorY="middle"
          maxWidth={1.1}
        >
          {line}
        </Text>
      ))}
    </group>
  );
};

const FloatingPanels: React.FC = () => {
  return (
    <group>
      <Panel
        position={[-1.9, 1.55, 0.4]}
        rotation={[0, 0.4, 0]}
        color="#22d3ee"
        title="terminal"
        lines={['$ next build', '✓ compiled', 'deploy ready']}
        floatOffset={0.2}
      />
      <Panel
        position={[1.95, 1.7, 0.25]}
        rotation={[0, -0.45, 0]}
        color="#60a5fa"
        title="code.tsx"
        lines={['const app = () => {', '  return <UI />', '}']}
        floatOffset={1.1}
      />
      <Panel
        position={[0.2, 2.15, -0.4]}
        rotation={[0.1, -0.1, 0]}
        color="#a78bfa"
        title="ai.assistant"
        lines={['embedding.search()', 'llm.integrate()', 'stream.response']}
        floatOffset={2}
      />
    </group>
  );
};

export default FloatingPanels;
