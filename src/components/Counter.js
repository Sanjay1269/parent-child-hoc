import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {

    const stateCopy = { ...state }

    switch (action.type) {
        case 'increment':
            stateCopy.firstCounter = stateCopy.firstCounter + action.payload
            return stateCopy
        case 'decrement':
            stateCopy.firstCounter = stateCopy.firstCounter - action.payload
            return stateCopy
        case 'reset':
            stateCopy.firstCounter = initialState.firstCounter
            return stateCopy
        case 'increment1':
            stateCopy.secondCounter = stateCopy.secondCounter + action.payload
            return stateCopy
        case 'decrement1':
            stateCopy.secondCounter = stateCopy.secondCounter - action.payload
            return stateCopy
        case 'reset1':
            stateCopy.secondCounter = initialState.secondCounter
            return stateCopy

        default: return state
    }

}

function Counter() {

    //const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer,initialState);

    return <div>
        <p>this is for first counter</p>
        <p>state :{state.firstCounter}</p>
        <button onClick={() => {
            dispatch({
                type: 'increment',
                payload: 10
            })
        }}>increment</button>
        <br />
        <button onClick={() => {
            dispatch({
                type: 'decrement',
                payload: 10
            })
        }}>decrement</button>
        <br />
        <button onClick={() => {
            dispatch({
                type: 'reset'
            })
        }}>reset</button>
        <br />
        <br />
        <hr />
        <p>this is for second counter</p>
        <p>state : {state.secondCounter}</p>
        <button onClick={() => {
            dispatch({
                type: 'increment1',
                payload: 30
            })
        }}>increment</button>
        <br />
        <button onClick={() => {
            dispatch({
                type: 'decrement1',
                payload: 50
            })
        }}>decrement</button>
        <br />
        <button onClick={() => {
            dispatch({
                type: 'reset1'
            })
        }}>reset</button>
    </div>;
}

export default Counter;
