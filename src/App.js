import giphy from './giphy.gif';
import './App.css';
import { Component } from 'react';
import { Componente1 } from './Componente/Componente1';
import { ComponenteDos } from './Componente/ComponenteDos';
import { ComponenteTres } from './Componente/ComponenteTres';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={giphy} className="App-logo" alt="logo" />
       <Componente1/>
        <br></br>
        <ComponenteDos/>
        <br></br>
        <ComponenteTres/>
      </header>
    </div>
  );
}

export default App;
