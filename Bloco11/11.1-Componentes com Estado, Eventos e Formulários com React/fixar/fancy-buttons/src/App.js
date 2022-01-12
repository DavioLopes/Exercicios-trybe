import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
      subtrai: 0,
    };
  }

  clicou0 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  };

  clicou1 = () => {
    this.setState((estadoAnterior, _props) => ({
      subtrai: estadoAnterior.subtrai - 1,
    }));
  };

  limpa = () => {
    this.setState({ numeroDeCliques: 0, subtrai: 0 });
  };

  render() {
    const { numeroDeCliques, subtrai } = this.state;
    return (
      <div>
        <button onClick={this.clicou0}>soma: {numeroDeCliques}</button>
        <button onClick={this.clicou1}>subtrai: {subtrai}</button>
        <button onClick={this.limpa}>limpa</button>
      </div>
    );
  }
}

export default App;
