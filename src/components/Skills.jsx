import React from 'react';

function Skills({ skills = Array(3).fill('') }) {
  return (
    <section>
      <h2 className='Skills-title'>Skills</h2>
      {skills.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className='Skills-item'>
          <h3>
            {element.name}
            :
            {element.percentage}
          </h3>
        </li>
      ))}
    </section>
  );
}

export default Skills;
