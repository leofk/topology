// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import '../css/App.css';

import Markdown from '../components/Markdown';

const articleName = 'home';

function Home() {
  return (
    <div className="App">
      <Element>
        <Markdown fileName='intro' articleName={articleName} />
      </Element>
      <Element>
        <Link to="/dotsandloops">
          <Markdown fileName='pione_title' articleName={articleName} />
        </Link>
      </Element> 
      <Element>
        <Markdown fileName='pione_body' articleName={articleName} />
      </Element>    
      <Element>
        <Link to="/circle">
         <Markdown fileName='s1_title' articleName={articleName} />
        </Link>
      </Element>
      <Element>
        <Markdown fileName='s1_body' articleName={articleName} />
      </Element>    
      </div>
  );
}

export default Home;
