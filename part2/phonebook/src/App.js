import React, { useState } from 'react';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName, phone: newPhone }));
    setNewName('');
    setNewPhone('');
  };
  const handleNewName = (event) => {
    if (persons.find((person) => person.name === event.target.value)) {
      alert(`${event.target.value} is already added to phonebook`);
    }
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearch = (event) => {
    const personsToDisplay = persons.filter((person) =>
      person.name.includes(event.target.value)
    );
    setPersons(personsToDisplay);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newPhone={newPhone}
        handleNewPhone={handleNewPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
