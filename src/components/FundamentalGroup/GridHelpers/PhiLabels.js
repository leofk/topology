// PhiLabels.js
import React from 'react';
import { Html } from '@react-three/drei';
import Markdown from '../../Markdown';

const PhiLabels = () => {
  return (
    <>
	{/* <Html position={[-0.55, 0, -0.5]} center>
        <Markdown markdownContent="$1$" />
      </Html>
      <Html position={[-0.55, 0, -0.25]} center>
        <Markdown markdownContent="$\frac{3}{4}$" />
      </Html>
      <Html position={[-0.55, 0, 0]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[-0.55, 0, 0.25]} center>
        <Markdown markdownContent="$\frac{1}{4}$" />
      </Html> */}
      <Html position={[-0.55, 0, 0.57]} center>
        <Markdown markdownContent="$0$" />
      </Html>
      <Html position={[-0.25, 0, 0.57]} center>
        <Markdown markdownContent="$\frac{1}{4}$" />
      </Html>
      <Html position={[0, 0, 0.57]} center>
        <Markdown markdownContent="$\frac{1}{2}$" />
      </Html>
      <Html position={[0.25, 0, 0.57]} center>
        <Markdown markdownContent="$\frac{3}{4}$" />
      </Html>
      <Html position={[0.5, 0, 0.57]} center>
        <Markdown markdownContent="$1$" />
      </Html>
      <Html position={[0.6, 0, -0.6]} center>
        <Markdown markdownContent="### $\varphi$" />
      </Html>
    </>
  );
};

export default PhiLabels;
