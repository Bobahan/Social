import React from 'react';

const Main = ({ a, b }: { a: number; b: number }) => {
  return (
    <>
      <div>Hello world</div>
      <div>A is: {a}</div>
      <div>B is: {b}</div>
      <div>Sum is: {a + b}</div>
    </>
  );
};

export default Main;
