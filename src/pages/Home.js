// src/components/Home.js
import React from 'react';
import { Grid } from '@mui/material';
import '../css/App.css';

import circleImg from '../other/imgs/circle.png';
import pioneImg from '../other/imgs/pione.png';

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
            imageSrc={pioneImg}
            titleFileName="pione_title"
            bodyFileName="pione_body"
            articleName={articleName}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <ImageOverlay 
            linkTo="/topology/circle"
            imageSrc={circleImg}
            titleFileName="s1_title"
            bodyFileName="s1_body"
            articleName={articleName}
          />
        </Grid>
      </Grid>
    
    </div>
  );
}

export default Home;
