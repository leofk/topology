import React from 'react';
import { Element } from 'react-scroll';
import './css/App.css';

import ThreeScene from './components/ThreeScene';
import Markdown from './components/Markdown';
import AxiomScene from './components/AxiomScene';

import Loop from './components/Scenes/Loop';
import Homotopy from './components/Scenes/Homotopy';
import Class from './components/Scenes/Class';
import PathProduct from './components/Scenes/PathProduct';

import Identity from './components/FundamentalGroup/Identity';
import Inverse from './components/FundamentalGroup/Inverse';
import Associativity from './components/FundamentalGroup/Associativity';
import IdentityH2 from './components/FundamentalGroup/IdentityH2';
import InverseH2 from './components/FundamentalGroup/InverseH2';
import AssociH2 from './components/FundamentalGroup/AssociH2';
import IdentityH1 from './components/FundamentalGroup/IdentityH1';
import AssociH1 from './components/FundamentalGroup/AssociH1';

const articleName = 'pione';

function Pione() {
  return (
    <div className="Pione">
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' articleName={articleName} />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Loop} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='homotopy' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Homotopy} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='class' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={Class} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='product' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene Component={PathProduct} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='fundamentalgroup' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <AxiomScene Axiom={Identity} H2={IdentityH2} H1={IdentityH1} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='inverse' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
      <AxiomScene Axiom={Inverse} H2={InverseH2} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='associativity' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
      <AxiomScene Axiom={Associativity} H2={AssociH2} H1={AssociH1} />
      </Element>
    </div>
  );
}

export default Pione;
