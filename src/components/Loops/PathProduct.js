import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PathProduct = ({ s }) => {
  const dotFG = useRef();
  const lineOne = useRef();
  const lineTwo = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const fg_positions_red = [];
  const fg_positions_blue = [];

  const loop_f = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  const loop_g = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0);
  };

  const loop_fg = (s) => {
    if (s <= 1 / 2) {
      return loop_f(2 * s);
    } else {
      return loop_g(2 * s - 1);
    }
  };

  for (let i = 0; i <= numPoints; i++) {
    const u = i / 1000;
    if (u < 1/2) {
      fg_positions_red.push(loop_fg(u));
    } else if (u == 1/2) {
      fg_positions_red.push(loop_fg(u));
      fg_positions_blue.push(loop_fg(u));
    } else {
      fg_positions_blue.push(loop_fg(u));
    }
  }

  useFrame(() => {
    const dot1 = dotFG.current;
    const line1 = lineOne.current;
    const line2 = lineTwo.current;

    dot1.position.copy(loop_fg(s));

    line1.geometry.setFromPoints(fg_positions_red);
    line2.geometry.setFromPoints(fg_positions_blue);
  });

  return (
    <group>
      <mesh ref={dotFG}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={s <= 1/2 ? 'red' : 'blue'} />
      </mesh>
      <line ref={lineOne}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} />
      </line>
      <line ref={lineTwo}>
        <bufferGeometry />
        <lineBasicMaterial color={'blue'} />
      </line>
    </group>
  );
};

export default PathProduct;
