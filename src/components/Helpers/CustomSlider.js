import React from 'react';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';

function CustomSlider({
  value,
  min = 0,
  max = 1,
  step = 0.01,
  onChange,
  marks = [
    { value: 0, label: '0' },
    { value: 0.25, label: '1/4' },
    { value: 0.5, label: '1/2' },
    { value: 0.75, label: '3/4' },
    { value: 1, label: '1' },
  ],
  sliderTrackColor = 'grey', // Default color for the track
  sliderThumbColor = 'grey',    // Default color for the thumb
  sliderRailColor = 'grey'   // Default color for the rail
  
}) {
  return (
    <Slider
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      aria-labelledby="slider"
      marks={marks}
      sx={{
        color: sliderTrackColor, // Track color
        '& .MuiSlider-thumb': {
          backgroundColor: sliderThumbColor, // Thumb color
        },
        '& .MuiSlider-track': {
          backgroundColor: sliderTrackColor, // Track color
        },
        '& .MuiSlider-rail': {
          backgroundColor: sliderRailColor, // Rail color
        },
      }}
    />
  );
}

// Define prop types
CustomSlider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  sliderTrackColor: PropTypes.string,
  sliderThumbColor: PropTypes.string,
  sliderRailColor: PropTypes.string,
};

export default CustomSlider;
