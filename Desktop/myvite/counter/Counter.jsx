import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sayac: {count}</h2>
      <button onClick={increment} style={{ marginRight: '10px', backgroundColor:'red' }}>Artir</button>
      <button onClick={decrement} style={{backgroundColor:'red'}}>Azalt</button>
    </div>
  );
};

export default Counter;