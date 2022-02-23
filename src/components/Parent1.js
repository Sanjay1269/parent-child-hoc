import React, { useState } from 'react';
import Child1 from './Child1';

function Parent1() {
    const [name, setname] = useState('sanjay');

    const nameHandeler = (name) => {
        setname(name)
    }

    return <div>
        <p>this is {name}</p>
        <Child1 method={nameHandeler} />
    </div>;
}

export default Parent1;
