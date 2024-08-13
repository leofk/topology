import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Class = ({ s, t }) => {
  const dotFRef = useRef();
  const lineFRef = useRef();
  const dotGRef = useRef();
  const lineGRef = useRef();
  const dotHRef = useRef();
  const lineHRef = useRef();
  
  const dotARef = useRef();
  const lineARef = useRef();
  const dotBRef = useRef();
  const lineBRef = useRef();
  const dotCRef = useRef();
  const lineCRef = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const f_positions = [];
  const g_positions = [];
  const h_positions = [];
  const A_positions = [];
  const B_positions = [];
  const C_positions = [];
  
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

  const A = (s, t) => {
    return new THREE.Vector3().addVectors(loop_f(s).clone().multiplyScalar(1 - t), loop_g(s).clone().multiplyScalar(t));
  };

  const B = (s, t) => {
    return new THREE.Vector3().addVectors(loop_g(s).clone().multiplyScalar(1 - t), loop_h(s).clone().multiplyScalar(t));
  };

  const C = (s, t) => {
    if (t < 1 / 2) {
      return A(s, 2 * t);
    } else {
      return B(s, 2 * t - 1);
    }
  };

  for (let i = 0; i <= numPoints; i++) {
    const u = i / 1000;
    f_positions.push(loop_f(u));
    g_positions.push(loop_g(u));
    h_positions.push(loop_h(u));
    A_positions.push(A(u, t));
    B_positions.push(B(u, t));
    C_positions.push(C(u, t));
  }

  useFrame(() => {
    if (!dotFRef.current || !dotGRef.current || !dotHRef.current || !dotARef.current || !dotBRef.current || !dotCRef.current) {
      return;
    }

    dotFRef.current.position.copy(loop_f(s));
    dotGRef.current.position.copy(loop_g(s));
    dotHRef.current.position.copy(loop_h(s));
    dotARef.current.position.copy(A(s, t));
    dotBRef.current.position.copy(B(s, t));
    dotCRef.current.position.copy(C(s, t));

    lineFRef.current.geometry.setFromPoints(f_positions);
    lineGRef.current.geometry.setFromPoints(g_positions);
    lineHRef.current.geometry.setFromPoints(h_positions);
    lineARef.current.geometry.setFromPoints(A_positions);
    lineBRef.current.geometry.setFromPoints(B_positions);
    lineCRef.current.geometry.setFromPoints(C_positions);
  });

  return (
    <group>
      <mesh ref={dotARef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'purple'} />
      </mesh>
      <line ref={lineARef}>
        <bufferGeometry />
        <lineBasicMaterial color={'purple'} linewidth={2} />
      </line>
      <mesh ref={dotBRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'green'} />
      </mesh>
      <line ref={lineBRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'green'} linewidth={2} />
      </line>
      <mesh ref={dotCRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'orange'} />
      </mesh>
      <line ref={lineCRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'darkorange'} linewidth={2} />
      </line>
      <mesh ref={dotGRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <line ref={lineGRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'blue'} linewidth={2} />
      </line>
      <mesh ref={dotHRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'yellow'} />
      </mesh>
      <line ref={lineHRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'orange'} linewidth={2} />
      </line>
      <mesh ref={dotFRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <line ref={lineFRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
    </group>
  );
};

export default Class;
