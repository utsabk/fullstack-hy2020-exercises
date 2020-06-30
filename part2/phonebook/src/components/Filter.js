import React from 'react'

const Filter = ({ handleSearch }) => {
    return (
      <>
        <label>filter shown with</label>
        <input onChange={handleSearch} />
      </>
    );
  };

  export default Filter