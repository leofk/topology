import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const loop_f = (s) => {
  const angle = s * Math.PI * 2;
  return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
};

export const loop_g = (s) => {
  const angle = s * Math.PI * 2;
  return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0);
};

export const homotopy = (s, t) => {
  return new THREE.Vector3().addVectors(loop_f(s).clone().multiplyScalar(1 - t), loop_g(s).clone().multiplyScalar(t));
}

const Homotopy = ({ s, t }) => {

  const dotRef1 = useRef();
  const lineRef1 = useRef();
  const dotRef2 = useRef();
  const lineRef2 = useRef();
  const dotRef3 = useRef();
  const lineRef3 = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const f_positions = [];
  const g_positions = [];
  const H_positions = [];


  for (let i = 0; i <= numPoints; i++) {
    const u = i / 1000;
    f_positions.push(loop_f(u));
    g_positions.push(loop_g(u));
    H_positions.push(homotopy(u, t));
  }

  useFrame(() => {
    const dot1 = dotRef1.current;
    const line1 = lineRef1.current;
    const dot2 = dotRef2.current;
    const line2 = lineRef2.current;
    const dot3 = dotRef3.current;
    const line3 = lineRef3.current;

    dot1.position.copy(loop_f(s));
    dot2.position.copy(loop_g(s));
    dot3.position.copy(homotopy(s,t));

    line1.geometry.setFromPoints(f_positions);
    line2.geometry.setFromPoints(g_positions);
    line3.geometry.setFromPoints(H_positions);
  });

  return (
    <group>
      <mesh ref={dotRef3}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'green'} />
      </mesh>
      <line ref={lineRef3}>
        <bufferGeometry />
        <lineBasicMaterial color={'green'} linewidth={2} />
      </line>

      <mesh ref={dotRef2}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <line ref={lineRef2}>
        <bufferGeometry />
        <lineBasicMaterial color={'blue'} linewidth={2} />
      </line>
      <mesh ref={dotRef1}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <line ref={lineRef1}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
    </group>
  );
};

export default Homotopy;
