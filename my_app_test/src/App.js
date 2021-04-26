import React from 'react';
import './App.css';
import Component from './Component';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const agenda = ['Ir ao médico', 'Estudar React', 'Ler'];

function App() {
  return (
    agenda.map((item) => task(item))
  );
}

export default App;