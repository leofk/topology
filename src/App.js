// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loops from './pages/Loops';
import Circle from './pages/Circle';
import './css/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
	  <Route path="/topology" element={<Home />} />
        <Route path="/topology/loops" element={<Loops />} />
        <Route path="/topology/circle" element={<Circle />} />
      </Routes>
    </Router>
  );
};

export default App;