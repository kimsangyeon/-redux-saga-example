import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onIncrementIfOdd }) => (
  <p>
    Clicked: {value} times
    <button onClick={onIncrement}>+</button>{' '}
    <button onClick={onDecrement}>-</button>{' '}
    <button onClick={onIncrementAsync}>Increment Async</button>{' '}
    <button onClick={onIncrementIfOdd}>Increment If Odd</button>
  </p>
);

export default Counter;
