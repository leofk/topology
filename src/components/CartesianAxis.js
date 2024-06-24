import React, { useRef } from 'react';
import * as THREE from 'three';

export const CartesianAxis = () => {
  const axesRef = useRef();

  // Define axis lines
  const xAxis = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-10, 0, 0), new THREE.Vector3(10, 0, 0)]);
  const yAxis = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -10, 0), new THREE.Vector3(0, 10, 0)]);
  const zAxis = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, -10), new THREE.Vector3(0, 0, 10)]);

  // Define axis line colors
  const axisMaterialX = new THREE.LineBasicMaterial({ color: 'red' }); // Red
  const axisMaterialY = new THREE.LineBasicMaterial({ color: 'green' }); // Green
  const axisMaterialZ = new THREE.LineBasicMaterial({ color: 'blue' }); // Blue

  return (
    <group ref={axesRef}>
      <line geometry={xAxis} material={axisMaterialX} />
      <line geometry={yAxis} material={axisMaterialY} />
      <line geometry={zAxis} material={axisMaterialZ} />
    </group>
  );
};
