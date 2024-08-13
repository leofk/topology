import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PhiLabels from './GridHelpers/PhiLabels';
import Square from './GridHelpers/Square';
import GridLines from './GridHelpers/GridLines';

const IdentityH1 = ({ s, t }) => {
  const dotRef = useRef();
  const lineRef = useRef();

  useFrame(() => {
    const dot = dotRef.current;
    
    // Create the piecewise line segments
    const slopePoints = [];
    slopePoints.push(new THREE.Vector3(-0.5, 0, 0.5)); // start point

    // Update dot position based on s and t values
    let u;
    let tp = 1-t;

    if (s <= 1/2) {
      u = 2 * s;
      u *= tp;
      u += t*s;
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - u)); // single segment

    } else {
      u = 1;
      u *= tp;
      u += t*s;

      let prev_s = (1/2);
      let prev_u = 2 * prev_s * tp;
      prev_u += t*prev_s
      // slopePoints.push(new THREE.Vector3(0, 0, -0.5)); // first segment end
      slopePoints.push(new THREE.Vector3(prev_s - 0.5, 0, 0.5 - prev_u)); // second segment end
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - u)); // second segment end
    }

    dot.position.set(s - 0.5, 0, 0.5 - u);

    // Update the slope line geometry with the piecewise points
    lineRef.current.geometry.setFromPoints(slopePoints);

  });

  return (
    <group>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'#1cff8e'} />
      </mesh>
     <Square />
      <GridLines />
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'darkgreen'} linewidth={2} />
      </line>
      <PhiLabels />
    </group>
  );
};

export default IdentityH1;
