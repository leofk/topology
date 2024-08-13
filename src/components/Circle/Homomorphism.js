import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Helix from './Helix'; // Import the Helix component

const Homomorphism = ({ s, n, m }) => {
  const wnRef = useRef();
  const wntildeRef = useRef();
  const loopRef = useRef();
  const pathRef = useRef();
  const projectRef = useRef();

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
  const tau_m = (s) => {
    return s + m;
  };

  // a path in R from 0 to n
  const w_n_tilde = (s) => {
    return n * s;
  };

  // a path in R from 0 to m
  const w_m_tilde = (s) => {
    return m * s;
  };

  // a path in R from 0 to x
  const path_x = (x, s) => {
    return x * s;
  };

  // a path in R from 0 to m+n. 
  const path_mn = (s) => {
    if (s <= 1/2) {
      return w_m_tilde(2*s);
    } else {
      return tau_m(w_n_tilde(2*s-1));
    }
  };

  // a loop in S1 that travels m times. 
  const w_m = (s) => {
    return p(w_m_tilde(s));
  };

  // a loop in S1 that travels x times. 
  const loop_x = (x, s) => {
    return p(path_x(x, s));
  };

  // a loop in S1 that travels from m to n+m (n times)
  const w_nplusm = (s) => {
    return p(tau_m(w_n_tilde(s)));
  };

  // a loop in S1 that travels m+n times. 
  const loop_mn = (s) => {
    if (s <= 1/2) {
      return w_m(2*s);
    } else {
      return w_nplusm(2*s-1);
    }
  };


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
      loop_pos.push(loop_x(x,u));
      path_pos.push(helix(path_x(x,u)));
    } else {
      loop_pos.push(loop_mn(u));
      path_pos.push(helix(path_mn(u)));
    }
  }
  
  useFrame(() => {
    const w_n_obj = wnRef.current;
    const w_n_tilde_obj = wntildeRef.current;
    const loop = loopRef.current;
    const path = pathRef.current;
    const project = projectRef.current;

    const loopPos = loop_mn(s);
    const pathPos = helix(path_mn(s));
  
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
      <mesh ref={wntildeRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <line ref={loopRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} />
      </line>
      <line ref={pathRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'blue'} />
      </line>
      <line ref={projectRef} >
        <bufferGeometry />
        <lineBasicMaterial color={'green'} />
      </line>
    </group>
  );
};

export default Homomorphism;
