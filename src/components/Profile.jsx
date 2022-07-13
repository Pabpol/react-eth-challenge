import React from 'react';

function Profile({ profile }) {
  return (
    <section>
      <h2 className='Profile-title'>About me</h2>
      <div className='Profile-desc'><p>{profile}</p></div>
    </section>
  );
}

export default Profile;
