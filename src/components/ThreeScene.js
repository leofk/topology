import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from './Scenes/CartesianAxis';

const ThreeScene = ({ Component, hasSecondSlider = false, hasIntegerChoice = false }) => {
  const [sliderValueS, setSliderValueS] = useState(0);
  const [sliderValueT, setSliderValueT] = useState(0);
  const [integerValue, setIntegerValue] = useState('0'); 

  const handleSliderChangeS = (event) => {
    setSliderValueS(parseFloat(event.target.value));
  };

  const handleSliderChangeT = (event) => {
    setSliderValueT(parseFloat(event.target.value));
  };

  const handleIntegerChange = (event) => {
    setIntegerValue(event.target.value);  
  };

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ fov: 75, position: [2, 1, 2] }}>
        <ambientLight intensity={0.2} />
        <hemisphereLight args={['white', 'blue', 1]} />
        <CartesianAxis />
        <Component s={sliderValueS} t={sliderValueT} n={integerValue} />
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
      {hasSecondSlider && (
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
      )}
      {hasIntegerChoice && (
        <div style={{ width: '80%', margin: '10px 0' }}>
          <label htmlFor="integerInput">Integer (n):</label>
          <input
            id="integerInput"
            type="text"  // Change type to "text" to allow negative numbers
            value={integerValue}
            onChange={handleIntegerChange}
            style={{ width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default ThreeScene;
