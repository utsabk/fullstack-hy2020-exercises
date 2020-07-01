import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const fetchPersons = async () => {
    const promise = axios.get('http://localhost:3001/persons');
    const persons = promise.data;
    setPersons(persons);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

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
