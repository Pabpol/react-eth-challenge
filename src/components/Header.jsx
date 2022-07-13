import React from 'react';

function Header({ name, children }) {
  return (
    <header>
      <h1 className='Header-title'>{name}</h1>
      {children}
    </header>
  );
}

export default Header;
