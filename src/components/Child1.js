import React from 'react';

function Child1(props) {

  return <div>
      <button onClick={() => {
          props.method('kiran')
      }}>change</button>
  </div>;
}

export default Child1;
