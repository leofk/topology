import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PathProduct = ({ s }) => {
  const dotFG = useRef();
  const lineFG = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const fg_positions = [];

  const loop_f = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  const loop_g = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0);
  };

  const loop_fg = (s) => {
    if (s <= 1/2) {
      return loop_f(2*s);
    } else {
      return loop_g(2*s-1);
    }
  };

  for (let i = 0; i <= numPoints; i++) {
    const u = (i / 1000);
    fg_positions.push(loop_fg(u));
  }

  useFrame(() => {
    const dot1 = dotFG.current;
    const line1 = lineFG.current;

    dot1.position.copy(loop_fg(s));
    line1.geometry.setFromPoints(fg_positions);
  });

  return (
    <group>
      <mesh ref={dotFG}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <line ref={lineFG}>
        <bufferGeometry />
        <lineBasicMaterial color={'black'} linewidth={2} />
      </line>
    </group>
  );
};

export default PathProduct;
