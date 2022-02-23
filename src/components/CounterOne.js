import React, { Component } from 'react';
import WithCounter from '../hoc/WithCounter';

class CounterOne extends Component{
    render() {
        const { count, incrementCount, decrementCount } = this.props
        return <div>
            <p>count : {count}</p>
            <button onClick={incrementCount}>increment</button>
            <button onClick={decrementCount}>decrement</button>
        </div>;
    }

}

export default WithCounter(CounterOne,10)




