// Loop.js
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Loop = ({ s }) => {

const dotRef = useRef();
const lineRef = useRef();

const numPoints = Math.floor(s * 1000); // number of points based on slider value
const positions = [];

const loop_f = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
};

// Parameterize points onto the circle
for (let i = 0; i <= numPoints; i++) {
  const u = (i / 1000);
  positions.push(loop_f(u));
}

useFrame(() => {
  const dot = dotRef.current;
  const line = lineRef.current;

  dot.position.copy(loop_f(s));
  line.geometry.setFromPoints(positions);
});

return (
  <group>
	{/* <mesh ref={sphereRef}>
	  <sphereGeometry args={[1, 32, 32]} />
	  <meshPhongMaterial color={'lightblue'} />
	</mesh> */}
	<mesh ref={dotRef}>
	  <sphereGeometry args={[0.015, 16, 16]} />
	  <meshStandardMaterial color={'red'} />
	</mesh>
	<line ref={lineRef}>
	  <bufferGeometry />
	  <lineBasicMaterial color={'red'} linewidth={2} />
	</line>
  </group>
);

};

export default Loop;