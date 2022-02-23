import React, { useState } from 'react';

function Even() {
    const [num, setnum] = useState([1,2,3,4,5,6]);
    
    const updateNum =() => {
        const numCopy =[...num]
        const even = numCopy.filter((e) => {
                return e%2===0
        })
        setnum(even)
    }
  return <div>
      {num.map((v,i) => {
          return <p>{v}</p>
      })}
      <button onClick={updateNum}>even</button>
  </div>;
}

export default Even;