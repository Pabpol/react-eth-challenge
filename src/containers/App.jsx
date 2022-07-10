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

const App = () => {
  const [person, setPerson] = useState([]);


  useEffect(() => {
    getPersonData();
  }, []);

  const getPersonData = async () => {
    const response = await getData('https://raw.githubusercontent.com/Pabpol/react-eth-challenge/main/data.json');
    setPerson(response.data);
  };
  

  console.log(person.name)

  const {
    Academic: academics,
    address,
    avatar,
    email,
    experience: experiences,
    interest: interests,
    languages,
    name,
    phone,
    profession,
    Profile: profile,
    skills,
    website,
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
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </>
  );
};

export default App;
