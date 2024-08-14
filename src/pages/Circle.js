import React from 'react';
import { Element } from 'react-scroll';
import '../css/App.css';

import ThreeScene from '../components/Scenes/ThreeScene';
import Markdown from '../components/Helpers/Markdown';

import CoveringMap from '../components/Circle/CoveringMap';
import Homomorphism, { path_mn } from '../components/Circle/Homomorphism';
import HomeButton from '../components/Helpers/HomeButton';

const articleName = 'circle';

function Circle() {
  return (
    <div className="App">
      <HomeButton />
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene label='CM' Component={CoveringMap} hasIntegerChoice={true}/>
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='homomorphism' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene label='HM' Component={Homomorphism} hasIntegerChoice={true} hasSecondInteger={true} path_mn={path_mn} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='facts' articleName={articleName}/>
      </Element>
      <HomeButton position='bottom' />
    </div>
  );
}

export default Circle;
