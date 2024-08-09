// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pione from './pages/Pione';
import S1 from './pages/S1';
import './css/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
	  <Route path="/" element={<Home />} />
        <Route path="/dotsandloops" element={<Pione />} />
        <Route path="/circle" element={<S1 />} />
      </Routes>
    </Router>
  );
};

export default App;