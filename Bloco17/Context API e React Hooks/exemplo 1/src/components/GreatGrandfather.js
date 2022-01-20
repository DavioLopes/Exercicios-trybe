import React from 'react';
import Grandmother from './Grandmother';
import MyContext from './myContext';

class GreatGrandfather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100000000
    }
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
  }
  handleMoneyChange() {
    this.setState((prevState) => ({money: prevState.money - 100}))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spend: this.handleMoneyChange
    }
    return (
      <MyContext.Provider value={contextValue}>
      <div>
        <h1> Eu sou a bissavo</h1>
        <Grandmother />
      </div>
      </MyContext.Provider>
    )
  }
}
export default GreatGrandfather;
