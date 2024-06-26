import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Inverse = ({ s, t }) => {

  const dotFFINVRef = useRef();
  const dotCRef = useRef();
  const dotH1Ref = useRef();
  const lineFFINVRef = useRef();
  // const lineH1Ref = useRef();

  let numPoints = Math.floor(s * 1000); // number of points based on slider value
  const ffinv_positions = [];
  // const h1_positions = [];

  const loop_f = (s) => {
    const angle = s * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  const loop_finv = (s) => {
    return loop_f(1-s);
  };

  const loop_constant = (s) => {
    return loop_f(0);
  };

  const loop_ffinv = (s) => {
    if (s <= 1/2) {
      return loop_f(2*s);
    } else {
      return loop_finv(2*s-1);
    }
  };

  const H1 = (s, t) => {
    if (s <= (1-t)/2) {
      return loop_f(2*s);
    } else if (s <= (1+t)/2) {
      return loop_f(1-t);
    } else {
      return loop_f(2-2*s)
    }
  }

  // so that we back track (i.e. never print s>1/2 points)
  if (numPoints > 500) {
    numPoints = 1000 % numPoints;
  }

  for (let i = 0; i <= numPoints; i++) {
    let u = i/1000;

    ffinv_positions.push(loop_ffinv(u));
    // h1_positions.push(H1(u, t));
  }
	
  useFrame(() => {
    const dot_ffinv = dotFFINVRef.current;
    const dot_c = dotCRef.current;
    const dot_h1 = dotH1Ref.current;
    const line_ffinv = lineFFINVRef.current;
    // const line_h1 = lineH1Ref.current;

    // Update dot positions using the functions
    dot_c.position.copy(loop_constant());
    dot_ffinv.position.copy(loop_ffinv(s));
    dot_h1.position.copy(H1(s, t));

    // Update the line geometry with the new positions
    line_ffinv.geometry.setFromPoints(ffinv_positions);
    // line_h1.geometry.setFromPoints(h1_positions);
  });

  return (
    <group>

      <mesh ref={dotH1Ref}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'#ffe51c'} />
      </mesh>
      {/* <line ref={lineH1Ref}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line> */}
      <mesh ref={dotCRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <mesh ref={dotFFINVRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <line ref={lineFFINVRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
    </group>
  );
};

export default Inverse;
