import React from 'react';

export default function Color() {
  const color = {
    name: 'Red',
    rgb: {
      red: 255,
      green: 0,
      blue: 0
    },
    hex: '#FF0000'
  };

  return (
    <>
      <dl>
        <dt>Name</dt>
        <dd>{color.name}</dd>

        <dl>RGB
          <dt>Red</dt>
          <dd>{color.rgb.red}</dd>
          <dt>Green</dt>
          <dd>{color.rgb.green}</dd>
          <dt>Blue</dt>
          <dd>{color.rgb.blue}</dd>
        </dl>

        <dt>Hex</dt>
        <dd>{color.hex}</dd>
      </dl>
    </>
  );
}
