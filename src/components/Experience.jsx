import React from 'react';

function Experience({ experiences = Array(3).fill('') }) {
  return (
    <section>
      <h2 className='Experience-title'>Experience</h2>
      <ul>
        {experiences.map((element, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className='Experience-item'>
            <h3>
              {element.company}
              /
              {element.jobTitle}
            </h3>
            <h4>
              {element.startDate}
              -
              {element.endDate}
            </h4>
            <p>{element.jobDescription}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
