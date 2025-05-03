import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import CheatSheet from './pages/CheatSheet';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/cheatsheet" element={<CheatSheet />} />
        {/* Optionally add a Details/About page here */}
      </Routes>
    </Router>
  );
}

export default App;
