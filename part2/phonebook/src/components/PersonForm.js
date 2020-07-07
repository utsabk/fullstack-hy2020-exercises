import React from 'react'

const PersonForm = ({
    handleSubmit,
    newName,
    handleNewName,
    newPhone,
    handleNewPhone,
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nameInput'>name:</label><input type='text' id='nameInput' value={newName} onChange={handleNewName} />
        </div>
        <div>
          <label htmlFor='phoneInput'> number:</label><input type='number' id='phoneInput' value={newPhone} onChange={handleNewPhone} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    );
  };

  export default PersonForm
