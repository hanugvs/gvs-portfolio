'use client';

import React from 'react';

const WorkspaceModel: React.FC = () => {
  return (
    <group position={[0, -0.85, 0]}>
      {/* Desk */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.12, 1.6]} />
        <meshStandardMaterial
          color="#1a2438"
          metalness={0.25}
          roughness={0.55}
        />
      </mesh>
      <mesh position={[-1.4, -0.2, 0.55]} castShadow>
        <boxGeometry args={[0.12, 0.9, 0.12]} />
        <meshStandardMaterial color="#101826" />
      </mesh>
      <mesh position={[1.4, -0.2, 0.55]} castShadow>
        <boxGeometry args={[0.12, 0.9, 0.12]} />
        <meshStandardMaterial color="#101826" />
      </mesh>
      <mesh position={[-1.4, -0.2, -0.55]} castShadow>
        <boxGeometry args={[0.12, 0.9, 0.12]} />
        <meshStandardMaterial color="#101826" />
      </mesh>
      <mesh position={[1.4, -0.2, -0.55]} castShadow>
        <boxGeometry args={[0.12, 0.9, 0.12]} />
        <meshStandardMaterial color="#101826" />
      </mesh>

      {/* Center monitor */}
      <group position={[0, 1.05, -0.25]}>
        <mesh castShadow>
          <boxGeometry args={[1.5, 0.9, 0.08]} />
          <meshStandardMaterial
            color="#0b1220"
            metalness={0.4}
            roughness={0.35}
          />
        </mesh>
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[1.35, 0.75]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0891b2"
            emissiveIntensity={0.45}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh position={[0, -0.55, 0.05]}>
          <boxGeometry args={[0.18, 0.25, 0.08]} />
          <meshStandardMaterial color="#151f33" />
        </mesh>
        <mesh position={[0, -0.7, 0.1]}>
          <boxGeometry args={[0.5, 0.05, 0.28]} />
          <meshStandardMaterial color="#151f33" />
        </mesh>
      </group>

      {/* Left monitor */}
      <group position={[-1.35, 0.95, -0.05]} rotation={[0, 0.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.1, 0.72, 0.07]} />
          <meshStandardMaterial
            color="#0b1220"
            metalness={0.35}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.95, 0.58]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={0.35}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Right monitor */}
      <group position={[1.35, 0.95, -0.05]} rotation={[0, -0.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.1, 0.72, 0.07]} />
          <meshStandardMaterial
            color="#0b1220"
            metalness={0.35}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.95, 0.58]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4f46e5"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Keyboard + mouse */}
      <mesh position={[0, 0.43, 0.35]} castShadow>
        <boxGeometry args={[1.1, 0.04, 0.35]} />
        <meshStandardMaterial color="#182234" />
      </mesh>
      <mesh position={[0.85, 0.43, 0.4]} castShadow>
        <boxGeometry args={[0.18, 0.03, 0.28]} />
        <meshStandardMaterial color="#1f2a40" />
      </mesh>
    </group>
  );
};

export default WorkspaceModel;
