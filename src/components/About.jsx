import React from 'react';

function About({ address, email, phone, website }) {
  return (
    <section>
      <h2 className='About-title'>Sobre mi</h2>
      <ul>
        <li className='About-item'>{phone}</li>
        <li className='About-item'>{email}</li>
        <li className='About-item'>{website}</li>
        <li className='About-item'>{address}</li>
      </ul>
    </section>
  );
}

export default About;
