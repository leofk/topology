import React from 'react';
import * as THREE from 'three';

const Helix = ({ radius = 1, height = 20, turns = 20, segments = 20000 }) => {
	const points = [];
	const segmentHeight = height / segments;
  
	for (let i = 0; i <= segments; i++) {
	  const t = (i / (1000 * height)) * turns * 2 * Math.PI; // turns based on height
	  const x = radius * Math.cos(t);
	  const y = -10 + i * segmentHeight; // from -10 to +10
	  const z = radius * Math.sin(t);
	  points.push(new THREE.Vector3(x, y, z));
	}
  

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="blue" linewidth={2} />
    </line>
  );
};

export default Helix;
