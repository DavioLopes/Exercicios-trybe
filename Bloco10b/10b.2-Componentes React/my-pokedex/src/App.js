import React from 'react';
import './App.css';
import poke from "./poke";
import Pokedex from './Components/Pokedex';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Pokedex pokemons={ poke }/>
      </div> 
  )}
}

export default App;
