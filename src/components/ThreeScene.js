import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from './Scenes/CartesianAxis';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ReactComponent as MIcon } from '../other/icons/letter-m.svg'; // Adjust the import path
import { ReactComponent as NIcon } from '../other/icons/letter-n.svg'; // Adjust the import path

const ThreeScene = ({ Component, hasSecondSlider = false, hasIntegerChoice = false, hasSecondInteger = false }) => {
  const [sliderValueS, setSliderValueS] = useState(0);
  const [sliderValueT, setSliderValueT] = useState(0);
  const [integerValue, setIntegerValue] = useState(0); 
  const [integerValueM, setIntegerValueM] = useState(0); 

  const handleSliderChangeS = (event, newValue) => {
    setSliderValueS(newValue);
  };

  const handleSliderChangeT = (event, newValue) => {
    setSliderValueT(newValue);
  };

  const handleIntegerChange = (event, newValue) => {
    setIntegerValue(newValue);
  };

  const handleIntegerChangeM = (event, newValue) => {
    setIntegerValueM(newValue);
  };

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: .25,
      label: '1/4',
    },
    {
      value: 0.5,
      label: '1/2',
    },
    {
      value: 0.75,
      label: '3/4',
    },
    {
      value: 1,
      label: '1',
    },
  ];

  const marks_int = [
    { value: -5, label: '-5' },
    { value: -4, label: '-4' },
    { value: -3, label: '-3' },
    { value: -2, label: '-2' },
    { value: -1, label: '-1' },
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  return (
    <Box
      sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <Canvas camera={{ fov: 75, position: [2, 1, 2] }}>
        <ambientLight intensity={0.2} />
        <hemisphereLight args={['white', 'blue', 1]} />
        <CartesianAxis />
        <Component s={sliderValueS} t={sliderValueT} n={integerValue} m={integerValueM}/>
        <OrbitControls 
          maxDistance={9.5} // Maximum zoom distance
          minDistance={1.1} // Maximum zoom distance
        />
      </Canvas>
      <Box sx={{ width: '85%', margin: '10px 0' }}>
        {/* <Typography gutterBottom>Distance (s):</Typography> */}
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <DirectionsRunIcon />
          <Slider value={sliderValueS} min={0} max={1} step={0.01} onChange={handleSliderChangeS} aria-labelledby="sliderS" marks={marks} />
        </Stack>

      </Box>
      {hasSecondSlider && (
        <Box sx={{ width: '85%', margin: '10px 0' }}>
          {/* <Typography gutterBottom>Time (t):</Typography> */}
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <AccessTimeIcon />
            <Slider value={sliderValueT} min={0} max={1} step={0.01} onChange={handleSliderChangeT} aria-labelledby="sliderT" marks={marks}/>
          </Stack>
        </Box>
      )}
      {hasIntegerChoice && 
      hasSecondInteger &&
      (
        <Box sx={{ width: '85%', margin: '10px 0' }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <MIcon style={{ width: 24, height: 24 }} />
          <Slider
              value={integerValueM}
              min={-5}  // Adjust these values as needed
              max={5}
              step={1}
              onChange={handleIntegerChangeM}
              aria-labelledby="integerSliderM"
              marks={marks_int}
            />
           </Stack>
        </Box>
      )}
      {hasIntegerChoice && (
        <Box sx={{ width: '85%', margin: '10px 0' }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <NIcon style={{ width: 24, height: 24 }} />

          <Slider
              value={integerValue}
              min={-5}  // Adjust these values as needed
              max={5}
              step={1}
              onChange={handleIntegerChange}
              aria-labelledby="integerSliderN"
              marks={marks_int}
            />
           </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ThreeScene;
