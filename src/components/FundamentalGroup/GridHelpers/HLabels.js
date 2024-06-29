// HLabels.js
import React from 'react';
import { Html } from '@react-three/drei';
import Markdown from '../../Markdown';

const HLabels = () => {
  return (
    <>
		    <Html position={[-0.55, 0, 0.57]} center>
        <Markdown markdownContent="$0$" />
      </Html>
      <Html position={[-0, 0, 0.57]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[-.55, 0, -0]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
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
    </>
  );
};

export default HLabels;
