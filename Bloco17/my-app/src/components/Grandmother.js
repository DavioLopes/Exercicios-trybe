import React from 'react';
import Father from './Father';

class Grandmother extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Eu sou a vó
        </h1>
        <Father />
      </div>
    )
  }
}

export default Grandmother;