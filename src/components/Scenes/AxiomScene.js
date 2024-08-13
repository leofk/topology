import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from '../Helpers/CartesianAxis';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CustomSlider from '../Helpers/CustomSlider';

  
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
    right: '1%', 
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
            minDistance={1.1} // Maximum zoom distance
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
        <Box sx={{ ...squareCanvasStyle, bottom: '9%' }}>
          <Canvas camera={{ fov: 75, position: [0, 1, 0] }}>
            <ambientLight intensity={1} />
            <H1 s={sliderValueS} t={sliderValueT} />
          </Canvas>
        </Box>
      )}

      <Box sx={{ width: '85%', margin: '10px 0' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <DirectionsRunIcon />
          <CustomSlider
            value={sliderValueS}
            onChange={handleSliderChangeS}
          />
        </Stack>
      </Box>

      <Box sx={{ width: '85%', margin: '10px 0' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <AccessTimeIcon />
          <CustomSlider
            value={sliderValueT}
            onChange={handleSliderChangeT}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default AxiomScene;
