// GridLines.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const createGridLines = () => {
  const lines = [];
  for (let i = 1; i < 4; i++) {
    const offset = i * 0.25 - 0.5;
    // Horizontal lines
    lines.push([
      new THREE.Vector3(-0.5, 0, offset),
      new THREE.Vector3(0.5, 0, offset),
    ]);
    // Vertical lines
    lines.push([
      new THREE.Vector3(offset, 0, -0.5),
      new THREE.Vector3(offset, 0, 0.5),
    ]);
  }
  return lines;
};

const gridLines = createGridLines();

const GridLines = () => {
  const gridLinesRef = useRef([]);

  useEffect(() => {
    gridLinesRef.current.forEach((lineRef, index) => {
      lineRef.geometry.setFromPoints(gridLines[index]);
    });
  }, []);

  return (
    <>
      {gridLines.map((_, index) => (
        <line key={index} ref={el => (gridLinesRef.current[index] = el)}>
          <bufferGeometry />
          <lineBasicMaterial color={'black'} linewidth={1} />
        </line>
      ))}
    </>
  );
};

export default GridLines;
