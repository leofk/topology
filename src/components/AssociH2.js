import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import Markdown from './Markdown'; 

const AssociH2 = ({ s, t }) => {
  const dotRef = useRef();
  const squareRef = useRef();
  const lineRef = useRef();
  const staticLineRef = useRef();

  const square = [
    new THREE.Vector3(-0.5, 0, -0.5),
    new THREE.Vector3(0.5, 0, -0.5),
    new THREE.Vector3(0.5, 0, 0.5),
    new THREE.Vector3(-0.5, 0, 0.5),
    new THREE.Vector3(-0.5, 0, -0.5)
  ];

  const slope = [
	  new THREE.Vector3(0, 0, 0.5),
    new THREE.Vector3(-0.25, 0, -0.5),

    new THREE.Vector3(0, 0, -0.5),
    new THREE.Vector3(0.25, 0, 0.5),
  ];

  useFrame(() => {

    // TODO
    // USE THE WINDOW WIDTH AND CURRENT WORLD COORDS? 
    // TO POSITION THE SQUARE AND CORRESPONDING ELEMENTS DYNAMICALLY


    const dot = dotRef.current;

    // Update dot position based on s and t values
    dot.position.set(s-0.5, 0, 0.5-t);

    // // Check condition to change dot color
    // if (s <= (t + 1) / 2) {
    //   dot.material.color.set('red');
    // } else {
    //   dot.material.color.set('blue');
    // }

    // Update the static line geometry with the square outline positions
    lineRef.current.geometry.setFromPoints(slope);
    squareRef.current.geometry.setFromPoints(square);
  });

  return (
    <group>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'#ffe51c'} />
      </mesh>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'black'} linewidth={2} />
      </line>
      <line ref={squareRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'black'} linewidth={2} />
      </line>
	  <Html position={[-0.55, 0, 0.57]} center>
        <Markdown markdownContent="$0$" />
      </Html>
      <Html position={[-0, 0, 0.57]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[-0, 0, -0.57]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[-.55, 0, -0]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[.25, 0, .57]} center>
        <Markdown markdownContent="$\frac{3}{4}$" />
      </Html>
      <Html position={[-.25, 0, -.57]} center>
        <Markdown markdownContent="$\frac{1}{4}$" />
      </Html>
      <Html position={[-.55, 0, -0.5]} center>
        <Markdown markdownContent="$1$" /> 
      </Html>
	  <Html position={[.5, 0, 0.57]} center>
        <Markdown markdownContent="$1$" />
      </Html>
	  <Html position={[0.6, 0, -0.6]} center>
        <Markdown markdownContent="### $H(s,t)$" />
      </Html>
	  <Html position={[-.375, 0, -0.57]} center>
        <Markdown markdownContent="#### $f$" />
      </Html>
      <Html position={[-.125, 0, -.57]} center>
        <Markdown markdownContent="#### $g$" />
      </Html>
      <Html position={[.25, 0, -.57]} center>
        <Markdown markdownContent="#### $h$" />
      </Html>

	  <Html position={[-.25, 0, .57]} center>
        <Markdown markdownContent="#### $f$" />
      </Html>
	  <Html position={[.125, 0, .57]} center>
        <Markdown markdownContent="#### $g$" />
      </Html>
      <Html position={[.375, 0, .57]} center>
        <Markdown markdownContent="#### $h$" />
      </Html>
    </group>
  );
};

export default AssociH2;
