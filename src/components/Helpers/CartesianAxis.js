import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';


export const DottedPlane = ({ size = 10, spacing = 0.05 }) => {
  const points = [];

  for (let i = -size; i <= size; i += spacing) {
    for (let j = -size; j <= size; j += spacing) {
      points.push(new THREE.Vector3(i, 0, j));
    }
  }

  const planeGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const planeMaterial = new THREE.PointsMaterial({ color: 'grey', size: 0.005 });

  return <points geometry={planeGeometry} material={planeMaterial} />;
};


export const CartesianAxis = () => {
  const axesRef = useRef();

  // Define axis lines
  const xAxis = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-10, 0, 0), new THREE.Vector3(10, 0, 0)]);
  const yAxis = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -10, 0), new THREE.Vector3(0, 10, 0)]);
  const zAxis = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, -10), new THREE.Vector3(0, 0, 10)]);

  const dashS = 0.03;
  const gapS = 0.03;

  // Define axis line colors and dashed pattern
  const axisMaterialX = new THREE.LineDashedMaterial({ color: 'black', dashSize: dashS, gapSize: gapS }); // X-axis
  const axisMaterialZ = new THREE.LineDashedMaterial({ color: 'black', dashSize: dashS, gapSize: gapS }); // Z-axis
  const axisMaterialY = new THREE.LineDashedMaterial({ color: 'black', dashSize: dashS, gapSize: gapS }); // Y-axis

  useFrame(() => {
    axesRef.current.children.forEach((line) => {
      line.computeLineDistances(); // Required for dashed lines to appear correctly
    });
  }, []);


  return (
    <>
      <group ref={axesRef}>
        <line geometry={xAxis} material={axisMaterialX} />
        <line geometry={yAxis} material={axisMaterialY} />
        <line geometry={zAxis} material={axisMaterialZ} />
      </group>
    </>
  );
};