import React from 'react';
import Header from './Header';
import Dog from './Dog';

export default function App() {
  const dog = {
    name: 'spot',
    age: 10,
    weight: '50lbs'
  };
  
  return (
    <>
      <Header />
      <Dog dog={dog} />
    </>
  );
}
