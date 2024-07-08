import React from 'react';

const Counter = ({numberFromParent}) => {
  return (
    <div>Hi, I am Counter, This is the number from my sibling Weather: {numberFromParent}</div>
  );
};

export default Counter;