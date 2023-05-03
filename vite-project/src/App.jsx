import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Person from './components/Person/Person';
import PersonClass from './components/PersonClass/PersonClass';

const persons = [
  {
    name: 'Vlad',
    surname: 'Kolo',
    age: 35,
  },
  {
    name: 'Manu',
    surname: 'Manuel',
    age: 30,
  },
  {
    name: 'Lucía',
    surname: 'Lunar',
    age: 25,
  },
];

const App = () => {
  const firstPerson = persons[0];
  const secondPerson = persons[1];
  const thirdPerson = persons[2];

  return (
    <div>
      <Header />
      <Home />
      <Person
        name={firstPerson.name}
        surname={firstPerson.surname}
        age={firstPerson.age}
      />
      <Person
        name={secondPerson.name}
        surname={secondPerson.surname}
        age={secondPerson.age}
      />
      <PersonClass
        name={thirdPerson.name}
        surname={thirdPerson.surname}
        age={thirdPerson.age}
      />
    </div>
  );
};

export default App;
