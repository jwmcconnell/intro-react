import React from 'react';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '2em',
  };

  return (
    <header style={styles}>
      <h1 style={{ margin: 0 }}>My Dogs</h1>
    </header>
  );
}
