import React, { Component } from 'react';

export class Child extends Component {
    render() {
        return <div>
            <button onClick={() => { this.props.Method('chethan') }}>change name</button>
        </div>;
    }
}

export default Child;




