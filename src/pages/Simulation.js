import React from 'react';
import BuddySimulation from './SimulationContent';
import './SimulationContent.css';

function Simulation() {
  return (
    <div className="simulation-container">
      <h1 className="simulation-title">Buddy Memory Simulation</h1>
      <BuddySimulation initialSize={1024} />
      <footer className="simulation-footer">
        © TP 2025
      </footer>
    </div>
  );
}

export default Simulation;
