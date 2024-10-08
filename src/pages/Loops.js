import React from 'react';
import { Element } from 'react-scroll';
import '../css/App.css';

import ThreeScene from '../components/Scenes/ThreeScene';
import Markdown from '../components/Helpers/Markdown';
import AxiomScene from '../components/Scenes/AxiomScene';

import Loop from '../components/Loops/Loop';
import Homotopy from '../components/Loops/Homotopy';
import Class from '../components/Loops/Class';
import PathProduct from '../components/Loops/PathProduct';

import Identity from '../components/Loops/Identity';
import Inverse from '../components/Loops/Inverse';
import Associativity from '../components/Loops/Associativity';
import IdentityH2 from '../components/Loops/IdentityH2';
import InverseH2 from '../components/Loops/InverseH2';
import AssociH2 from '../components/Loops/AssociH2';
import IdentityH1 from '../components/Loops/IdentityH1';
import AssociH1 from '../components/Loops/AssociH1';
import HomeButton from '../components/Helpers/HomeButton';

const articleName = 'loops';

function Pione() {
  return (
    <div className="App">
      <HomeButton />
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' articleName={articleName} />
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene label='Loop' Component={Loop} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='homotopy' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene label='Homotopy' Component={Homotopy} hasSecondSlider/>
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='class' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene label='Class' Component={Class} hasSecondSlider />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='product' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <ThreeScene label='PathProduct' Component={PathProduct} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='fundamentalgroup' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
        <AxiomScene label='Identity' Axiom={Identity} H2={IdentityH2} H1={IdentityH1}  />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='inverse' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
      <AxiomScene label='Inverse' Axiom={Inverse} H2={InverseH2}  />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='associativity' articleName={articleName}/>
      </Element>
      <Element name="tjs" className="section" id="tjs">
      <AxiomScene label='Associativity' Axiom={Associativity} H2={AssociH2} H1={AssociH1} />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='outro' articleName={articleName}/>
      </Element>
      <HomeButton position='bottom' />
    </div>
  );
}

export default Pione;
