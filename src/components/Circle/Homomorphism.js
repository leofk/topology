import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Helix from './Helix'; // Import the Helix component

  // helix path
  // s \in [0, ns]
  const helix = (s) => {
    const t = 2 * Math.PI * s;
    const x = Math.cos(t);
    const y = s;  // Ensure y is a number
    const z = Math.sin(t);
    return new THREE.Vector3(x, y, z);
  };

  // covering map from R to S1
  const p = (s) => {
    const angle = 2 * Math.PI * s;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  // a translation on R by m
  const tau_m = (s, m) => {
    return s + m;
  };

  // a path in R from 0 to n
  const w_n_tilde = (s, n) => {
    return n * s;
  };

  // a path in R from 0 to m
  export const w_m_tilde = (s, m) => {
    return m * s;
  };

  // a path in R from 0 to x
  const path_x = (s, x) => {
    return x * s;
  };

  // a path in R from 0 to m+n. 
  export const path_mn = (s, m, n) => {
    if (s <= 1/2) {
      return w_m_tilde(2*s, m);
    } else {
      return tau_m(w_n_tilde(2*s-1, n), m);
    }
  };

  // a loop in S1 that travels m times. 
  export const w_m = (s, m) => {
    return p(w_m_tilde(s, m));
  };

  // a loop in S1 that travels x times. 
  const loop_x = (s, x) => {
    return p(path_x(s, x));
  };

  // a loop in S1 that travels from m to n+m (n times)
  const w_nplusm = (s, m, n) => {
    return p(tau_m(w_n_tilde(s, n), m));
  };

  // a loop in S1 that travels m+n times. 
  export const loop_mn = (s, m, n) => {
    if (s <= 1/2) {
      return w_m(2*s, m);
    } else {
      return w_nplusm(2*s-1, m, n);
    }
  };

const Homomorphism = ({ s, n, m }) => {
  const wnRef = useRef();
  const wntildeRef = useRef();
  const loopRef = useRef();
  const pathRef = useRef();
  const projectRef = useRef();

  let numPoints = Math.floor(s * 1000); 
  const maxPoints = Math.min(500 + Math.floor(Math.abs(m/n) * 500), 1000);

  let flip = false;

  const loop_pos = [];
  const path_pos = [];

  if (m * n < 0) {
    if (numPoints > 500) {
      
      if (numPoints > maxPoints) { 
        flip = true; 
        numPoints = (1000/(1000-maxPoints))*(numPoints-maxPoints);
      } else {
        numPoints = 500 - ((numPoints-500) / Math.abs(m/n));
      }
    }
  }

  for (let i = 0; i <= numPoints; i++) {
    let u = i/1000;

    if (flip) {
      let x = m+n;
      loop_pos.push(loop_x(u, x));
      path_pos.push(helix(path_x(u, x)));
    } else {
      loop_pos.push(loop_mn(u, m, n));
      path_pos.push(helix(path_mn(u, m, n)));
    }
  }
  
  useFrame(() => {
    const w_n_obj = wnRef.current;
    const w_n_tilde_obj = wntildeRef.current;
    const loop = loopRef.current;
    const path = pathRef.current;
    const project = projectRef.current;

    const loopPos = loop_mn(s, m, n);
    const pathPos = helix(path_mn(s, m, n));
  
    w_n_obj.position.copy(loopPos);
    w_n_tilde_obj.position.copy(pathPos);
    loop.geometry.setFromPoints(loop_pos);
    path.geometry.setFromPoints(path_pos);
    project.geometry.setFromPoints([loopPos, pathPos]);
  });

  return (
    <group>
      <Helix />
      <mesh ref={wnRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <line ref={loopRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} />
      </line>
      <mesh ref={wntildeRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <line ref={pathRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'blue'} />
      </line>
      <line ref={projectRef} >
        <bufferGeometry />
        <lineBasicMaterial color={'darkorange'} />
      </line>
    </group>
  );
};

export default Homomorphism;
