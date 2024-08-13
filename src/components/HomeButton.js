import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import backButtonImage from '../other/imgs/cube.png'; // Adjust the path as necessary

// Styled IconButton for the back button with hover effect
const StyledBackButton = styled(IconButton)({
  position: 'absolute', // Fixed position to stay in place while scrolling
  top: 10,
  left: 10,
  width: 40,
  height: 40,
  zIndex: 1000, // Ensure it stays on top of other elements
  padding: 0,
  opacity: 1, // Default opacity
  '&:hover': {
    opacity: 0.9, // Full opacity on hover
  },
});

function HomeButton() {
  return (
    <Link to="/topology">
      <StyledBackButton>
        <img src={backButtonImage} alt="Home" style={{ width: '100%', height: '100%' }} />
      </StyledBackButton>
    </Link>
  );
}

export default HomeButton;
