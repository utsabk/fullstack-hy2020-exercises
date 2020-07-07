import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Persons';
import contactServices from './services/contacts';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);

  const fetchPersons = async () => {
    const response = await contactServices.getAll();
    setPersons(response);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const duplicateObj = persons.find((person) => person.name === newName);
    if (duplicateObj) {
      console.log('This is a duplicate Person/object :- ', duplicateObj);
      
      if(window.confirm(
        `${duplicateObj.name} is already added to phonebook, replace the old number with a new one`
      )){
        const newObj = { name: newName, phone: newPhone };
      const response = await contactServices.update(duplicateObj.id, newObj);
      setPersons(
        persons.map((note) => (note.id !== duplicateObj.id ? note : response))
      );
      setNewName('');
      setNewPhone('');
      console.log('This is a response after update :-- ', response);

    }else{
      setNewName('');
      setNewPhone('');
      console.log('Contact replacement aborted')
    }

      
    } else {
      const newObj = { name: newName, phone: newPhone };
      const returnedContact = await contactServices.create(newObj);
      setPersons(persons.concat(returnedContact));
      setNewName('');
      setNewPhone('');
    }
  };
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearch = (event) => {
    const personsToDisplay = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(personsToDisplay);
  };

  const deleteObj = async (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      try {
        const removedObj = await contactServices.remove(person.id);
        console.log('Removed obj', removedObj);
      } catch (err) {
        console.log('Error while deleting:-', err);
      }
      setPersons(persons.filter((n) => n.id !== person.id));
      setFilteredPersons(persons.filter((n) => n.id !== person.id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewName={handleNewName}
        newPhone={newPhone}
        handleNewPhone={handleNewPhone}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.length < 1
          ? persons.map((person) => (
              <Person
                key={person.name}
                person={person}
                onClickListner={() => {
                  deleteObj(person);
                }}
              />
            ))
          : filteredPersons.map((person) => (
              <Person
                key={person.name}
                person={person}
                onClickListner={() => {
                  deleteObj(person);
                }}
              />
            ))}
      </ul>
    </div>
  );
};

export default App;
