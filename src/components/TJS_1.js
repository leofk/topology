import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SphereWithTrail from './Loop';
import { CartesianAxis } from './CartesianAxis';

const ThreeScene = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseFloat(event.target.value));
  };

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ fov: 75, position: [2, 1, 2]}}>
        <ambientLight intensity={0.2} />
        <hemisphereLight args={['white', 'blue', 1 ]} />
        <CartesianAxis />
        <SphereWithTrail s={sliderValue} />
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
          value={sliderValue}
          onChange={handleSliderChange}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ThreeScene;
