import React, { useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from '../Helpers/CartesianAxis';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CustomSlider from '../Helpers/CustomSlider';
import KeyComponent from '../Helpers/KeyComponent'; 

const AxiomScene = ({ label, Axiom, H2, H1 = false, keyComponents = [] }) => {
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

  const keyComponentMap = {
    Identity: [
      { color: 'red', label: 'f \\cdot e' },
      { color: 'blue', label: 'f' },
      { color: 'green', label: 'H_1' },
      { color: 'orange', label: 'H_2' },
    ],
    Inverse: [
      { color: 'red', label: 'f \\cdot \\bar{f}' },
      { color: 'blue', label: 'e' },
      { color: 'orange', label: 'H_2' },
    ],
    Associativity: [
      { color: 'red', label: 'f \\cdot (g \\cdot h) ' },
      { color: 'blue', label: ' (f \\cdot g) \\cdot h' },
      { color: 'green', label: 'H_1' },
      { color: 'orange', label: 'H_2' },
    ]
  };

  // Use useMemo to avoid recalculating on every render
  const dynamicKeyComponents = useMemo(() => {
    const components = keyComponentMap[label] || [];
    return components.map(key => {
      let label = key.label;

      // Replace placeholders with dynamic values
      return { color: key.color, label };
    });
  }, [keyComponentMap, label]);


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
      <Box sx={{ position: 'absolute', top: 10, left: 20, width: 'auto' }}>
        {dynamicKeyComponents.map((key, index) => (
          <KeyComponent key={index} color={key.color} label={key.label} />
        ))}
      </Box>
    </Box>
  );
};

export default AxiomScene;
