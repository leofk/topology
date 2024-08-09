import React from 'react';
import { Element } from 'react-scroll';
import '../css/App.css';

import ThreeScene from '../components/ThreeScene';
import Markdown from '../components/Markdown';

import CoveringMap from '../components/Scenes/CoveringMap';
import Homomorphism from '../components/Scenes/Homomorphism';

const articleName = 's1';

function S1() {
  return (
    <div className="App">
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={CoveringMap} hasIntegerChoice={true}/>
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='homomorphism' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Homomorphism} hasIntegerChoice={true} hasSecondInteger={true}/>
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='facts' articleName={articleName}/>
      </Element>
    </div>
  );
}

export default S1;
