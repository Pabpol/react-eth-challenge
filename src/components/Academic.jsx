import React from 'react';

function Academic({ academics = Array(3).fill('') }) {
  return (
    <section>
      <h2 className='Academic-title'>Academic</h2>
      {academics.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className='Academic-item'>
          <h3>
            {element.degree}
          </h3>
          <h4>
            {element.startDate}
            -
            {element.endDate}
          </h4>
          <h3>{element.institution}</h3>
        </li>
      ))}
    </section>
  );
}

export default Academic;
