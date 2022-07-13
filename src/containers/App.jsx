import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

function App() {
  const [person, setPerson] = useState([]);

  const getPersonData = async () => {
    const response = await getData('https://raw.githubusercontent.com/Pabpol/react-eth-challenge/main/data.json');
    setPerson(response.data);
  };

  useEffect(() => {
    getPersonData();
  }, []);

  const {
    address,
    email,
    interest: interests,
    name,
    phone,
    website,
    Profile: profile,
    experience,
    skills,
    Academic: academics,
    languages,
  } = person;
  return (
    <>
      <Header name={name}>
        <About
          address={address}
          email={email}
          phone={phone}
          website={website}
        />
      </Header>
      <Profile profile={profile} />
      <Experience experiences={experience} />
      <Academic academics={academics} />
      <Skills skills={skills} />
      <Interest interests={interests} />
      <Languages languages={languages} />
    </>
  );
}

export default App;
