import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Markdown from './Markdown';
import '../css/ImageOverlay.css'; // Import CSS related to ImageOverlay

function ImageOverlay({ linkTo, imageSrc, titleFileName, articleName }) {
  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <Box 
        position="relative" 
        sx={{
          width: '100%',
          height: 0,
          paddingTop: '70%',
          overflow: 'hidden',
          '&:hover .overlay': {
            opacity: 1,
          },
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={titleFileName}
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box className="overlay">
			<Box className="text">
				<Stack spacing={1} alignItems="center">
					<Markdown fileName={titleFileName} articleName={articleName} />
				</Stack>
        	</Box>
		</Box>
      </Box>
    </Link>
  );
}

export default ImageOverlay;
