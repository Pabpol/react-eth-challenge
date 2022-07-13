import React from 'react';

function Languages({ languages = Array(3).fill('') }) {
  return (
    <section>
      <h2 className='Languages-title'>Languages</h2>
      <ul>
        {languages.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <li key={index} className='Skills-item'>
            <h3>
              {element.name}
              :
              {element.percentage}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
