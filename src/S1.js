import React from 'react';
import { Element } from 'react-scroll';
import './css/App.css';

import ThreeScene from './components/ThreeScene';
import Markdown from './components/Markdown';
import AxiomScene from './components/AxiomScene';

import CoveringMap from './components/Scenes/CoveringMap';

const articleName = 's1';

function S1() {
  return (
    <div className="S1">
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={CoveringMap} hasIntegerChoice={true}/>
      </Element>
    </div>
  );
}

export default S1;
