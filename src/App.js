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
import AxiomScene from './components/AxiomScene';
import IdentityH2 from './components/IdentityH2';
import InverseH2 from './components/InverseH2';
import AssociH2 from './components/AssociH2';
import IdentityH1 from './components/IdentityH1';
import AssociH1 from './components/AssociH1';

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
        <AxiomScene Axiom={Identity} H2={IdentityH2} H1={IdentityH1} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='inverse' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
      <AxiomScene Axiom={Inverse} H2={InverseH2} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='associativity' />
      </Element>
      <Element name="tjs" className="section" id="tjs">
      <AxiomScene Axiom={Associativity} H2={AssociH2} H1={AssociH1} />
      </Element>
    </div>
  );
}

export default App;
