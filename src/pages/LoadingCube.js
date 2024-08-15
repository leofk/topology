// LoadingCube.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube = () => {
  const meshRef = useRef();

  // Rotate the cube
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} /> {/* Smaller cube */}
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const LoadingCube = () => {
  return (
    <Canvas style={{ background: 'white', height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default LoadingCube;
