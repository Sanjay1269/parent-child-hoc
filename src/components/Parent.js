import React, { Component } from 'react';
import Child from './Child';

export class Parent extends Component {
  state = {
    name: 'sanjay'
  }

  updateName = (n) => {
    this.setState({ name: n })
  }

  render() {
    return <div>
      <p>name: {this.state.name}</p>

      <Child Method={this.updateName} />

    </div>;
  }
}

export default Parent;






