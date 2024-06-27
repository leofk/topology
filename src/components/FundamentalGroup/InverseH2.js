import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Markdown from '../Markdown'; 
import HLabels from './GridHelpers/HLabels';
import Square from './GridHelpers/Square';
import * as THREE from 'three';

const InverseH2 = ({ s, t }) => {
  const dotRef = useRef();
  const lineRef = useRef();

  const slope = [
	  new THREE.Vector3(0.5, 0, -0.5),
    new THREE.Vector3(0, 0, 0.5),
    new THREE.Vector3(-0.5, 0, -0.5),
  ];
  useFrame(() => {

    const dot = dotRef.current;

    // Update dot position based on s and t values
    dot.position.set(s-0.5, 0, 0.5-t);
    lineRef.current.geometry.setFromPoints(slope);

  });

  return (
    <group>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'#ffe51c'} />
      </mesh>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'black'} linewidth={2} />
      </line>
      <Square />
      <HLabels />
      <Html position={[-0, 0, -0.57]} center>
          <Markdown markdownContent="#### $e$" />
        </Html>
      <Html position={[-.25, 0, .57]} center>
          <Markdown markdownContent="#### $f$" />
        </Html>
      <Html position={[.25, 0, .57]} center>
        <Markdown markdownContent="#### $\bar{f}$" />
      </Html>
    </group>
  );
};

export default InverseH2;
