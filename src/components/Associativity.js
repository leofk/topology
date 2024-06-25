import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Associativity = ({ s, t }) => {

  const dotfgHRef = useRef();
  const dotFghRef = useRef();
  const dotH1Ref = useRef();
  const dotH2Ref = useRef();
  const linefgHRef = useRef();
  const lineFghRef = useRef();
  // const lineH1Ref = useRef();
  // const lineH2Ref = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const fgH_positions = [];
  const Fgh_positions = [];
  const h1_positions = [];
  const h2_positions = [];

  const loop_f = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  const loop_g = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0);
  };

  const loop_h = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), Math.sin(angle), Math.sin(angle));
  };

  const loop_Fgh = (s) => {
    if (s <= 1/2) {
      return loop_f(2*s);
    } else if (s <= 3/4) {
      return loop_g(4*s - 2) 
    } else {
      return loop_h(4*s - 3)
    }
  };

  const loop_fgH = (s) => {
    if (s <= 1/4) {
      return loop_f(4*s);
    } else if (s <= 1/2) {
      return loop_g(4*s - 1) 
    } else {
      return loop_h(2*s - 1)
    }
  };

  const phi = (s) => {
    if (s < 1/2) {
      return s/2;
    } else if (s <= 3/4) {
      return s - 1/4;
    } else {
      return 2*s - 1;
    }
  };

  const H1 = (s, t) => {
    const convex_combination = ((1-t)*phi(s))+(t*s)
    return loop_fgH(convex_combination);
  }

  const H2 = (s, t) => {
    if (s <= (2-t)/4){
      return loop_f((4*s)/(2-t));
    } else if (s <= (3-t)/4){
      return loop_g(4*s+t-2);
    } else {
      return loop_h((4*s-3+t)/(1+t));
    }
  }
  
  for (let i = 0; i <= numPoints; i++) {
    const u = (i / 1000);
    fgH_positions.push(loop_fgH(u));
    Fgh_positions.push(loop_Fgh(u));
    h1_positions.push(H1(u, t));
    h2_positions.push(H2(u, t));
  }
	
  useFrame(() => {
    const dot_fgH = dotfgHRef.current;
    const dot_Fgh = dotFghRef.current;
    const dot_h1 = dotH1Ref.current;
    const dot_h2 = dotH2Ref.current;
    const line_fgH = linefgHRef.current;
    const line_Fgh = lineFghRef.current;
    // const line_h1 = lineH1Ref.current;
    // const line_h2 = lineH2Ref.current;

    // Update dot positions using the functions
    dot_fgH.position.copy(loop_fgH(s));
    dot_Fgh.position.copy(loop_Fgh(s));
    dot_h1.position.copy(H1(s, t));
    dot_h2.position.copy(H2(s, t));

    // Update the line geometry with the new positions
    line_fgH.geometry.setFromPoints(fgH_positions);
    line_Fgh.geometry.setFromPoints(Fgh_positions);
    // line_h1.geometry.setFromPoints(h1_positions);
    // line_h2.geometry.setFromPoints(h2_positions);
  });

  return (
    <group>
      <line ref={linefgHRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
      <mesh ref={dotfgHRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <line ref={lineFghRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
      <mesh ref={dotFghRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <mesh ref={dotH1Ref}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'lightgreen'} />
      </mesh>
      {/* <line ref={lineH1Ref}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line> */}
      <mesh ref={dotH2Ref}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
      {/* <line ref={lineH2Ref}>
        <bufferGeometry />
        <lineBasicMaterial color={'yellow'} linewidth={2} />
      </line> */}
    </group>
  );
};

export default Associativity;
