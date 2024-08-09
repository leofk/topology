import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from './Scenes/CartesianAxis';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


// const CustomCamera = () => {
// 	const { camera, gl } = useThree();
  
// 	useEffect(() => {
// 	  const handleResize = () => {
// 		const size = Math.min(gl.domElement.clientWidth, gl.domElement.clientHeight);
// 		camera.aspect = 1;
// 		camera.updateProjectionMatrix();
// 		gl.setSize(size, size);
// 	  };
  
// 	  window.addEventListener('resize', handleResize);
// 	  handleResize(); // Set the initial aspect ratio
  
// 	  return () => {
// 		window.removeEventListener('resize', handleResize);
// 	  };
// 	}, [camera, gl]);
  
// 	return null;
//   };
  
const AxiomScene = ({ Axiom, H2, H1 = false }) => {
  const [sliderValueS, setSliderValueS] = useState(0);
  const [sliderValueT, setSliderValueT] = useState(0);

  const handleSliderChangeS = (event, newValue) => {
    setSliderValueS(newValue);
  };

  const handleSliderChangeT = (event, newValue) => {
    setSliderValueT(newValue);
  };

  const squareCanvasStyle = {
    width: '45vmin',
    height: '45vmin',
    position: 'absolute',
    right: '0%', 
  };

  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ fov: 75, position: [1, 2, 1] }}>
          <ambientLight intensity={0.2} />
          <hemisphereLight args={['white', 'blue', 1]} />
          <CartesianAxis />
          <Axiom s={sliderValueS} t={sliderValueT} />
          <OrbitControls 
            maxDistance={9.5} // Maximum zoom distance
          />
        </Canvas>
      </Box>

      <Box sx={{ ...squareCanvasStyle, top: '0%' }}>
        <Canvas camera={{ fov: 75, position: [0, 1, 0] }}>
          <ambientLight intensity={1} />
          <H2 s={sliderValueS} t={sliderValueT} />
        </Canvas>
      </Box>
      
      {H1 && (
        <Box sx={{ ...squareCanvasStyle, bottom: '12%' }}>
          <Canvas camera={{ fov: 75, position: [0, 1, 0] }}>
            <ambientLight intensity={1} />
            <H1 s={sliderValueS} t={sliderValueT} />
          </Canvas>
        </Box>
      )}

      <Box sx={{ width: '80%', margin: '10px 0' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <DirectionsRunIcon />
          <Slider
            value={sliderValueS}
            min={0}
            max={1}
            step={0.01}
            onChange={handleSliderChangeS}
            aria-labelledby="sliderS"
            marks={[
              { value: 0, label: '0' },
              { value: 0.25, label: '1/4' },
              { value: 0.5, label: '1/2' },
              { value: 0.75, label: '3/4' },
              { value: 1, label: '1' },
            ]}
          />
        </Stack>
      </Box>

      <Box sx={{ width: '80%', margin: '10px 0' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <AccessTimeIcon />
          <Slider
            value={sliderValueT}
            min={0}
            max={1}
            step={0.01}
            onChange={handleSliderChangeT}
            aria-labelledby="sliderT"
            marks={[
              { value: 0, label: '0' },
              { value: 0.25, label: '1/4' },
              { value: 0.5, label: '1/2' },
              { value: 0.75, label: '3/4' },
              { value: 1, label: '1' },
            ]}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default AxiomScene;
