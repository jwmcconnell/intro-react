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

  const styles = {
    backgroundColor: color.hex,
    width: '1rem',
    height: '1rem',
    display: 'inline-block',
    marginLeft: '1rem'
  };

  return (
    <>
      <dl>
        <dt>Name</dt>
        <dd style={{ color: 'red' }}>
          {color.name}
          <div style={styles}></div>
        </dd>
        
        <dt>RGB</dt>
        <dd>
          <p>red: {color.rgb.red}</p>
          <p>green: {color.rgb.green}</p>
          <p>blue: {color.rgb.blue}</p>
        </dd>

        <dt>Hex</dt>
        <dd>{color.hex}</dd>
      </dl>
    </>
  );
}
