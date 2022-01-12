import React from 'react';
import Daughter from './Daughter';

class Father extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Eu sou o pai
        </h1>
        <Daughter />
      </div>
    )
  }
}
export default Father;