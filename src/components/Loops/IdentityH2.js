import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import Markdown from '../Helpers/Markdown'; 
import Square from './GridHelpers/Square';
import HLabels from './GridHelpers/HLabels';

const IdentityH2 = ({ s, t }) => {
  const dotRef = useRef();
  const lineRef = useRef();

  const slope = [
	  new THREE.Vector3(0, 0, 0.5),
    new THREE.Vector3(0.5, 0, -0.5),
  ];

  useFrame(() => {

    const dot = dotRef.current;

    // Update dot position based on s and t values
    dot.position.set(s-0.5, 0, 0.5-t);

    // Update the static line geometry with the square outline positions
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
      <Html position={[-0, 0, -0.59]} center>
        <Markdown markdownContent="#### $f$" />
      </Html>
      <Html position={[-.25, 0, .55]} center>
        <Markdown markdownContent="#### $f$" />
      </Html>
	    <Html position={[.25, 0, .55]} center>
        <Markdown markdownContent="#### $e$" />
      </Html>
    </group>
  );
};

export default IdentityH2;
