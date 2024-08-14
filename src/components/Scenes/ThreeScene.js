// src/components/Scenes/ThreeScene.js
import React, { useState, useMemo } from 'react';
import { Canvas, invalidate } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CartesianAxis } from '../Helpers/CartesianAxis';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ReactComponent as MIcon } from '../../other/icons/letter-m.svg';
import { ReactComponent as NIcon } from '../../other/icons/letter-n.svg'; 
import CustomSlider from '../Helpers/CustomSlider';
import KeyComponent from '../Helpers/KeyComponent';
import Homomorphism, {path_mn, loop_mn, w_m, w_m_tilde} from '../Circle/Homomorphism';
import {loop_f, loop_g, homotopy} from '../Loops/Homotopy';

const ThreeScene = ({ label, Component, hasSecondSlider = false, hasIntegerChoice = false, hasSecondInteger = false}) => {
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

  const keyComponentMap = {
    CM: [
      {
        color: 'red',
        label: String.raw`
          \omega_{${integerValue}}\left(${sliderValueS.toFixed(2)}\right) 
          = \left(${w_m(sliderValueS, integerValue).x.toFixed(2)},  
          ${w_m(sliderValueS, integerValue).z.toFixed(2)}\right)
        `        
      },          
      {
        color: 'blue',
        label: String.raw`
          \widetilde{\omega_{${integerValue}}}\left(${sliderValueS.toFixed(2)}\right) 
          = ${(w_m_tilde(sliderValueS, integerValue)).toFixed(2)}
        `
      },    
      {
        color: 'orange', 
        label: String.raw`
          p\left(${(w_m_tilde(sliderValueS, integerValue)).toFixed(2)}\right)
          = \left(${w_m(sliderValueS, integerValue).x.toFixed(2)},  
          ${w_m(sliderValueS, integerValue).z.toFixed(2)}\right)
        `
      }
    ],
    HM: [
      {
        color: 'red',
        label: String.raw`
          \omega_{${integerValueM}${integerValue >= 0 ? '+' : ''}${integerValue}}\left(${sliderValueS.toFixed(2)}\right) 
          = \left(${loop_mn(sliderValueS, integerValueM, integerValue).x.toFixed(2)},  
          ${loop_mn(sliderValueS, integerValueM, integerValue).z.toFixed(2)}\right)
        `        
      },          
      {
        color: 'blue',
        label: String.raw`
          \widetilde{\omega_{${integerValueM}${integerValue >= 0 ? '+' : ''}${integerValue}}}\left(${sliderValueS.toFixed(2)}\right) 
          = ${(path_mn(sliderValueS, integerValueM, integerValue)).toFixed(2)}
        `
      },    
      {
        color: 'orange', 
        label: String.raw`
          p\left(${(path_mn(sliderValueS, integerValueM, integerValue)).toFixed(2)}\right)
          = \left(${loop_mn(sliderValueS, integerValueM, integerValue).x.toFixed(2)},  
          ${loop_mn(sliderValueS, integerValueM, integerValue).z.toFixed(2)}\right)
        `
      }
    ],
    Loop: [
      { color: 'red', label: 'f' } 
    ],
    Homotopy: [
      {
        color: 'red',
        label: String.raw`
          f\left(${sliderValueS.toFixed(2)}\right) 
          = \left(${loop_f(sliderValueS).x.toFixed(2)},  
          ${loop_f(sliderValueS).z.toFixed(2)},
          ${loop_f(sliderValueS).y.toFixed(2)}\right)
        `        
      },          
      {
        color: 'blue',
        label: String.raw`
          g\left(${sliderValueS.toFixed(2)}\right) 
          = \left(${loop_g(sliderValueS).x.toFixed(2)},  
          ${loop_g(sliderValueS).z.toFixed(2)},
          ${loop_g(sliderValueS).y.toFixed(2)}\right)
        `        
      },  
      {
        color: 'green', 
        label: String.raw`
          H\left(${sliderValueS.toFixed(2)}, ${sliderValueT.toFixed(2)} \right) 
          = \left(${homotopy(sliderValueS,sliderValueT).x.toFixed(2)},  
          ${homotopy(sliderValueS,sliderValueT).z.toFixed(2)},
          ${homotopy(sliderValueS,sliderValueT).y.toFixed(2)}\right)
        `      
      }
    ],
    Class : [
      { color: 'red', label: 'f' },
      { color: 'blue', label: 'g' },
      { color: 'yellow', label: 'h' },
      { color: 'purple', label: 'A' },
      { color: 'green', label: 'B' },
      { color: 'orange', label: 'C' },
    ],
    PathProduct: [
      { color: 'red', label: 'f' },
      { color: 'blue', label: 'g' },
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
  }, [keyComponentMap, label, sliderValueS, integerValue, integerValueM]);

  return (
    <Box
      sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
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
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <DirectionsRunIcon />
          <CustomSlider
            value={sliderValueS}
            onChange={handleSliderChangeS}
          />        
        </Stack>
      </Box>
      {hasSecondSlider && (
        <Box sx={{ width: '85%', margin: '10px 0' }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <AccessTimeIcon />
            <CustomSlider
              value={sliderValueT}
              onChange={handleSliderChangeT}
            />          
          </Stack>
        </Box>
      )}
      {hasIntegerChoice && hasSecondInteger && (
        <Box sx={{ width: '85%', margin: '10px 0' }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <MIcon style={{ width: 24, height: 24 }} />
            <CustomSlider
              value={integerValueM}
              min={-5}
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
            <CustomSlider
              value={integerValue}
              min={-5}
              max={5}
              step={1}
              onChange={handleIntegerChange}
              aria-labelledby="integerSliderN"
              marks={marks_int}
            />
          </Stack>
        </Box>
      )}
      <Box sx={{ position: 'absolute', top: 10, left: 20, width: 'auto' }}>
        {dynamicKeyComponents.map((key, index) => (
          <KeyComponent key={index} color={key.color} label={key.label} />
        ))}
      </Box>
    </Box>
  );
};

export default ThreeScene;
