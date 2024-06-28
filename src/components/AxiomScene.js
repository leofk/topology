import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from './Scenes/CartesianAxis';

const CustomCamera = () => {
	const { camera, gl } = useThree();
  
	useEffect(() => {
	  const handleResize = () => {
		const size = Math.min(gl.domElement.clientWidth, gl.domElement.clientHeight);
		camera.aspect = 1;
		camera.updateProjectionMatrix();
		gl.setSize(size, size);
	  };
  
	  window.addEventListener('resize', handleResize);
	  handleResize(); // Set the initial aspect ratio
  
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, [camera, gl]);
  
	return null;
  };

const AxiomScene = ({ Axiom, H2, H1 = false }) => {
  const [sliderValueS, setSliderValueS] = useState(0);
  const [sliderValueT, setSliderValueT] = useState(0);

  const handleSliderChangeS = (event) => {
    setSliderValueS(parseFloat(event.target.value));
  };

  const handleSliderChangeT = (event) => {
    setSliderValueT(parseFloat(event.target.value));
  };

  const squareCanvasStyle = {
    position: 'relative',
    width: '45vmin',
    height: '45vmin',
    position: 'absolute', 
    right: '0%', 
    Index: 10, 
	// boxShadow: '1px 1px 5px 3px #ffffff'
  };

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ fov: 75, position: [1, 2, 1] }}>
          <ambientLight intensity={0.2} />
          <hemisphereLight args={['white', 'blue', 1]} />
          <CartesianAxis />
          <Axiom s={sliderValueS} t={sliderValueT} />
          <OrbitControls />
        </Canvas>
      </div>

      <div style={{ ...squareCanvasStyle, top: '0%'}}>
        <Canvas camera={{ fov: 75, position: [0, 1, 0] }}>
          <CustomCamera />
          <ambientLight intensity={1} />
          <H2 s={sliderValueS} t={sliderValueT} />
        </Canvas>
      </div>
      
      {H1 && (
        <div style={{ ...squareCanvasStyle, bottom: '12%'}}>
          <Canvas camera={{ fov: 75, position: [0, 1, 0] }}>
            <CustomCamera />
            <ambientLight intensity={1} />
            <H1 s={sliderValueS} />
          </Canvas>
        </div>
      )}

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

export default AxiomScene;
