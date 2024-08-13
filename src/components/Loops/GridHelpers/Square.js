// Square.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Square = () => {
  const squareRef = useRef();

  const square = [
    new THREE.Vector3(-0.5, 0, -0.5),
    new THREE.Vector3(0.5, 0, -0.5),
    new THREE.Vector3(0.5, 0, 0.5),
    new THREE.Vector3(-0.5, 0, 0.5),
    new THREE.Vector3(-0.5, 0, -0.5)
  ];

  useEffect(() => {
    squareRef.current.geometry.setFromPoints(square);
  }, []);

  return (
    <line ref={squareRef}>
      <bufferGeometry />
      <lineBasicMaterial color={'black'} linewidth={2} />
    </line>
  );
};

export default Square;
