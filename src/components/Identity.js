import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Identity = ({ s, t }) => {

  const dotFRef = useRef();
  const dotCRef = useRef();
  const dotFCRef = useRef();
  const dotH1Ref = useRef();
  const dotH2Ref = useRef();
  const lineFRef = useRef();
  const lineFCRef = useRef();
  const lineH1Ref = useRef();
  const lineH2Ref = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const f_positions = [];
  const fc_positions = [];
  const h1_positions = [];
  const h2_positions = [];

  const loop_f = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  const loop_constant = () => {
    return loop_f(1);
  };

  const loop_fc = (s) => {
    if (s <= 1/2) {
      return loop_f(2*s);
    } else {
      return loop_constant();
    }
  };

  const phi = (s) => {
    if (s <= 1/2) {
      return 2*s;
    } else {
      return 1;
    }
  };

  const H1 = (s, t) => {
    const convex_combination = ((1-t)*phi(s))+(t*s)
    return loop_f(convex_combination);
  }

  const H2 = (s, t) => {
    if (s <= (t+1)/2) {
      return loop_f((2*s)/(1+t));
    } else {
      return loop_constant;
    }
  }

  for (let i = 0; i <= numPoints; i++) {
    const u = (i / 1000);
    f_positions.push(loop_f(u));
    fc_positions.push(loop_fc(u));
    // h1_positions.push(H1(u, t));
    // h2_positions.push(H2(u, t));
  }
	
  useFrame(() => {
    const dot_f = dotFRef.current;
    // const dot_c = dotCRef.current;
    const dot_fc = dotFCRef.current;
    const dot_h1 = dotH1Ref.current;
    const dot_h2 = dotH2Ref.current;
    const line_f = lineFRef.current;
    const line_fc = lineFCRef.current;
    // const line_h1 = lineH1Ref.current;
    // const line_h2 = lineH2Ref.current;

    // Update dot positions using the functions
    dot_f.position.copy(loop_f(s));
    // dot_c.position.copy(loop_constant());
    dot_fc.position.copy(loop_fc(s));
    dot_h1.position.copy(H1(s, t));
    dot_h2.position.copy(H2(s, t));

    // Update the line geometry with the new positions
    line_f.geometry.setFromPoints(f_positions);
    line_fc.geometry.setFromPoints(fc_positions);
    // line_h1.geometry.setFromPoints(h1_positions);
    // line_h2.geometry.setFromPoints(h2_positions);
  });

  return (
    <group>

      {/* <mesh ref={dotCRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'blue'} />
      </mesh> */}

      <mesh ref={dotH1Ref}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'lightgreen'} />
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
        <lineBasicMaterial color={'purple'} linewidth={2} />
      </line> */}
      <mesh ref={dotFCRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <line ref={lineFCRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
      <mesh ref={dotFRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>
      <line ref={lineFRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
    </group>
  );
};

export default Identity;
