import React from 'react';
import { Element } from 'react-scroll';
import './css/App.css';

import ThreeScene from './components/ThreeScene';
import Markdown from './components/Markdown';

import Loop from './components/Loop';
import Homotopy from './components/Homotopy';
import Class from './components/Class';
import PathProduct from './components/PathProduct';
import Identity from './components/Identity';
import Inverse from './components/Inverse';
import Associativity from './components/Associativity';

function App() {
  return (
    <div className="App">
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Loop} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='homotopy' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Homotopy} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='class' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Class} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='product' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={PathProduct} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='fundamentalgroup' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Identity} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='inverse' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Inverse} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='associativity' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Associativity} hasSecondSlider />
      </Element>
    </div>
  );
}

export default App;
