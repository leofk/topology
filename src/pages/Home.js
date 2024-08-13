// src/components/Home.js
import React from 'react';
import { Grid } from '@mui/material';
import '../css/App.css';

import circleImg from '../other/imgs/circle.png';
import loopsImg from '../other/imgs/loops.png';

import Markdown from '../components/Markdown';
import ImageOverlay from '../components/ImageOverlay';

const articleName = 'home';

function Home() {
  return (
    <div className="App">
      <Markdown fileName='intro' articleName={articleName} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ImageOverlay 
            linkTo="/topology/loops"
            imageSrc={loopsImg}
            titleFileName="loops"
            articleName={articleName}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <ImageOverlay 
            linkTo="/topology/circle"
            imageSrc={circleImg}
            titleFileName="circle"
            articleName={articleName}
          />
        </Grid>
      </Grid>
    
    </div>
  );
}

export default Home;
