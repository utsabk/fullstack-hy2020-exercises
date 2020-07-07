import React from 'react';

const Person = ({ person, onClickListner }) => {
  return (
    <li>
      {person.name}, {person.phone} <button onClick={onClickListner}>delete</button>
    </li>
  );
};

export default Person;