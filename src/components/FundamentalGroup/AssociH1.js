// AssociH1.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Square from './GridHelpers/Square';
import GridLines from './GridHelpers/GridLines';
import PhiLabels from './GridHelpers/PhiLabels';

const AssociH1 = ({ s, t }) => {
  const dotRef = useRef();
  const lineRef = useRef();

  useFrame(() => {
    const dot = dotRef.current;

    // Update dot position based on s and t values
    let u;
    let tp = 1-t;
    const slopePoints = [];
    slopePoints.push(new THREE.Vector3(-0.5, 0, 0.5)); // start point

    if (s <= 1/2) {
      u = s/2;
      u *= tp;
      u += t*s;

      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - u)); // single segment
    } else if (s <= 3/4) {
      u = s - 1/4;
      u *= tp;
      u += t*s;

      let prev_s = (1/2);
      let prev_u = (prev_s/2) * tp;
      prev_u += t*prev_s;

      slopePoints.push(new THREE.Vector3(prev_s - 0.5, 0, 0.5 - prev_u)); // second segment end
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - u)); // second segment end
    } else {
      u = 2 * s - 1;
      u *= tp;
      u += t*s;

      let prev_s = (1/2);
      let prev_u = (prev_s/2) * tp;
      prev_u += t*prev_s;

      let prev_s2 = (3/4);
      let prev_u2 = (prev_s2 - 1/4) * tp;
      prev_u2 += t*prev_s2;

      slopePoints.push(new THREE.Vector3(prev_s - 0.5, 0, 0.5 - prev_u)); // third segment end
      slopePoints.push(new THREE.Vector3(prev_s2 - 0.5, 0, 0.5 - prev_u2)); // third segment end
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - u)); // third segment end
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

export default AssociH1;
