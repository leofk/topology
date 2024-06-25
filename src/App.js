// src/App.js
import React from 'react';
import { Element } from 'react-scroll';
import './css/App.css';
import TJS_1 from './components/TJS_1';
import TJS_2 from './components/TJS_2';
import TJS_3 from './components/TJS_3';
import TJS_4 from './components/TJS_4';
import TJS_5 from './components/TJS_5';
import TJS_6 from './components/TJS_6';
import TJS_class from './components/TJS_class';
import Markdown from './components/Markdown';

function App() {
  return (
    <div className="App">
      <Element name="md" className="section" id="md">
        <Markdown fileName='intro' />
      </Element>
      <Element name="tjs1" className="section" id="tjs">
        <TJS_1 />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='homotopy' />
      </Element>
      <Element name="tjs2" className="section" id="tjs">
        <TJS_2 />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='class' />
      </Element>
      <Element name="tjsclass" className="section" id="tjs">
        <TJS_class />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='product' />
      </Element>
      <Element name="tjs3" className="section" id="tjs">
        <TJS_3 />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='fundamentalgroup' />
      </Element>
      <Element name="tjs4" className="section" id="tjs">
        <TJS_4 />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='inverse' />
      </Element>
      <Element name="tjs5" className="section" id="tjs">
        <TJS_5 />
      </Element>
      <Element name="md" className="section" id="md">
        <Markdown fileName='associativity' />
      </Element>
      <Element name="tjs6" className="section" id="tjs">
        <TJS_6 />
      </Element>
    </div>
  );
}

export default App;
