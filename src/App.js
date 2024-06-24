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
import MD_1 from './components/MD_1';
import MD_2 from './components/MD_2';
import MD_3 from './components/MD_3';
import MD_4 from './components/MD_4';
import MD_5 from './components/MD_5';
import MD_6 from './components/MD_6';


function App() {
  return (
    <div className="App">
      <Element name="md1" className="section" id="md">
        <MD_1 />
      </Element>
      <Element name="tjs1" className="section" id="tjs">
        <TJS_1 />
      </Element>
      <Element name="md2" className="section" id="md">
        <MD_2 />
      </Element>
      <Element name="tjs2" className="section" id="tjs">
        <TJS_2 />
      </Element>
      <Element name="md3" className="section" id="md">
        <MD_3 />
      </Element>
      <Element name="tjs3" className="section" id="tjs">
        <TJS_3 />
      </Element>
      <Element name="md4" className="section" id="md">
        <MD_4 />
      </Element>
      <Element name="tjs4" className="section" id="tjs">
        <TJS_4 />
      </Element>
      <Element name="md5" className="section" id="md">
        <MD_5 />
      </Element>
      <Element name="tjs5" className="section" id="tjs">
        <TJS_5 />
      </Element>
      <Element name="md6" className="section" id="md">
        <MD_6 />
      </Element>
      <Element name="tjs6" className="section" id="tjs">
        <TJS_6 />
      </Element>
    </div>
  );
}

export default App;
