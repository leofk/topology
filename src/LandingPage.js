// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="LandingPage">
      <h1>topo.</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dotsandloops">Fundamental Group is a Group</Link>
          </li>
          <li>
            <Link to="/circle">Fundmental Group of S1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
