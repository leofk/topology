import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Helix from '../S1/Helix'; // Import the Helix component

const Homomorphism = ({ s, n, m }) => {
  const wnRef = useRef();
  const wntildeRef = useRef();
  const lineRef = useRef();

  const numPoints = Math.floor(s * 1000); // number of points based on slider value
  const positions = [];


  // helix path
  // s \in [0, ns]
  const helix = (s) => {
    const t = 2 * Math.PI * s;
    const x = Math.cos(t);
    const y = s;  // Ensure y is a number
    const z = Math.sin(t);
    return new THREE.Vector3(x, y, z);
  };

  // p : R -> S1
  //     s -> (cos(2*pi*s), sin(2*pi*s))
  // the covering map p maps a point on the real line to the circle S1
  const p = (s) => {
    const angle = 2 * Math.PI * s;
    return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  };

  // tau_m : R -> R
  //       s -> s+m
  // a path in R from 0 to n
  const tau_m = (s) => {
    return s + m;
  };

  // tau_m \circ w_n_tilde
  // a path in R from m to n+m
  const tau_w_n_tilde = (s) => {
    return tau_m(w_n_tilde(s));
  };

  // w_n_tilde : I -> R
  //             s -> ns
  // a path in R from 0 to n
  const w_n_tilde = (s) => {
    return n * s;
  };

  // w_m_tilde : I -> R
  //             s -> ms
  // a path in R from 0 to m
  const w_m_tilde = (s) => {
    return m * s;
  };

  // w_n_tilde : I -> S1
  //             s -> (cos(2*pi*n*s), sin(2*pi*n*s))
  // a path in S1 
  const w_n = (s) => {
    return p(tau_w_n_tilde(s));
  };

  // w_m_tilde : I -> S1
  //             s -> (cos(2*pi*m*s), sin(2*pi*m*s))
  // a path in S1 
  const w_m = (s) => {
    return p(w_m_tilde(s));
  };

  const loop_mn = (s) => {
    if (s <= 1/2) {
      return w_m(2*s);
    } else {
      return w_n(2*s-1);
    }
  };

  const path_mn = (s) => {
    if (s <= 1/2) {
      return w_m_tilde(2*s);
    } else {
      return tau_w_n_tilde(2*s-1);
    }
  };

  // Parameterize points onto the circle
  for (let i = 0; i <= numPoints; i++) {
    const u = (i / 1000);
    positions.push(loop_mn(u));
  }

  useFrame(() => {
    const w_n_obj = wnRef.current;
    const w_n_tilde_obj = wntildeRef.current;
    const line = lineRef.current;

    w_n_obj.position.copy(loop_mn(s));
    w_n_tilde_obj.position.copy(helix(path_mn(s)));
    line.geometry.setFromPoints(positions);
  });

  return (
    <group>
      <mesh ref={wnRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <mesh ref={wntildeRef}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshPhongMaterial color={'blue'} />
      </mesh>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={'red'} linewidth={2} />
      </line>
      <Helix />
    </group>
  );
};

export default Homomorphism;