import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import Markdown from './Markdown'; 

const IdentityH1 = ({ s }) => {
  const dotRef = useRef();
  const squareRef = useRef();
  const gridLinesRef = useRef([]);
  const lineRef = useRef();

  const square = [
    new THREE.Vector3(-0.5, 0, -0.5),
    new THREE.Vector3(0.5, 0, -0.5),
    new THREE.Vector3(0.5, 0, 0.5),
    new THREE.Vector3(-0.5, 0, 0.5),
    new THREE.Vector3(-0.5, 0, -0.5)
  ];

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

  useFrame(() => {
    const dot = dotRef.current;
    
    // Create the piecewise line segments
    const slopePoints = [];
    slopePoints.push(new THREE.Vector3(-0.5, 0, 0.5)); // start point

    // Update dot position based on s and t values
    let t;

    if (s <= 1/2) {
      t = 2 * s;
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - t)); // single segment

    } else {
      t = 1;
      slopePoints.push(new THREE.Vector3(0, 0, -0.5)); // first segment end
      slopePoints.push(new THREE.Vector3(s - 0.5, 0, 0.5 - t)); // second segment end
    }

    dot.position.set(s - 0.5, 0, 0.5 - t);

    // Update the slope line geometry with the piecewise points
    lineRef.current.geometry.setFromPoints(slopePoints);

    // Update the static line geometry with the square outline positions
    squareRef.current.geometry.setFromPoints(square);

    gridLinesRef.current.forEach((lineRef, index) => {
      lineRef.geometry.setFromPoints(gridLines[index]);
    });
  });

  return (
    <group>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'#1cff8e'} />
      </mesh>
      <line ref={squareRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'black'} linewidth={2} />
      </line>
      {gridLines.map((_, index) => (
        <line key={index} ref={el => (gridLinesRef.current[index] = el)}>
          <bufferGeometry />
          <lineBasicMaterial color={'black'} linewidth={1} />
        </line>
      ))}
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'darkgreen'} linewidth={2} />
      </line>
      <Html position={[-0.55, 0, 0.57]} center>
        <Markdown markdownContent="$0$" />
      </Html>
      <Html position={[-0.25, 0, 0.57]} center>
        {/* bottom */}
        <Markdown markdownContent="$\frac{1}{4}$" />
      </Html>
      <Html position={[0, 0, 0.57]} center>
        {/* bottom */}
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[0.25, 0, 0.57]} center>
        {/* bottom */}
        <Markdown markdownContent="$\frac{3}{4}$" />
      </Html>
      <Html position={[0.5, 0, 0.57]} center>
        {/* bottom right */}
        <Markdown markdownContent="$1$" />
      </Html>
      <Html position={[0.6, 0, -0.6]} center>
        <Markdown markdownContent="### $\varphi$" />
      </Html>
    </group>
  );
};

export default IdentityH1;
