import React from 'react';

function Interest({ interests = Array(3).fill('') }) {
  return (
    <section>
      <h2 className='Interest-title'>Interest</h2>
      <ul>
        {interests.map((element, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className='Interest-item'>
            <h4>{element}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Interest;
