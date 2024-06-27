// AssociH1.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Square from './GridHelpers/Square';
import GridLines from './GridHelpers/GridLines';
import PhiLabels from './GridHelpers/PhiLabels';

const AssociH1 = ({ s }) => {
  const dotRef = useRef();
  const lineRef = useRef();

  useFrame(() => {
    const dot = dotRef.current;

    // Update dot position based on s and t values
    let t;
    const slopePoints = [];
    slopePoints.push(new THREE.Vector3(-0.5, 0, 0.5)); // start point

    if (s <= 1 / 2) {
      t = s / 2;
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - t)); // single segment
    } else if (s <= 3 / 4) {
      t = s - 1 / 4;
      slopePoints.push(new THREE.Vector3(0, 0, 0.25)); // first segment end
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - t)); // second segment end
    } else {
      t = 2 * s - 1;
      slopePoints.push(new THREE.Vector3(0, 0, 0.25)); // first segment end
      slopePoints.push(new THREE.Vector3(0.25, 0, 0)); // second segment end
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - t)); // third segment end
    }

    dot.position.set(s - 0.5, 0, 0.5 - t);

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
