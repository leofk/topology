import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from './CartesianAxis'; 
import Class from './Class';

const ThreeScene = () => {
  const [sliderValueS, setSliderValueS] = useState(0);
  const [sliderValueT, setSliderValueT] = useState(0);

  const handleSliderChangeS = (event) => {
    setSliderValueS(parseFloat(event.target.value));
  };

  const handleSliderChangeT = (event) => {
    setSliderValueT(parseFloat(event.target.value));
  };
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ fov: 75, position: [2, 1, 2] }}>
        <ambientLight intensity={0.2} />
        <hemisphereLight args={['white', 'blue', 1]} />
        <CartesianAxis />
        <Class s={sliderValueS} t={sliderValueT} />
        <OrbitControls />
      </Canvas>
      <div style={{ width: '80%', margin: '10px 0' }}>
        <label htmlFor="sliderS">Distance (s):</label>
        <input
          id="sliderS"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sliderValueS}
          onChange={handleSliderChangeS}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ width: '80%', margin: '10px 0' }}>
        <label htmlFor="sliderT">Time (t):</label>
        <input
          id="sliderT"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sliderValueT}
          onChange={handleSliderChangeT}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ThreeScene;
