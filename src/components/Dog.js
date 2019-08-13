import React from 'react';

export default function Dog() {
  const dog = {
    name: 'spot',
    age: 10,
    weight: '50lbs'
  };

  const fields = Object.keys(dog)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd>{dog[key]}</dd>
        </>
      );
    });

  return (
    <dl>
      {fields}
    </dl>
  );
}
