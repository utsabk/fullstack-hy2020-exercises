import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <>
      <label htmlFor="input">Find countries</label>
      {' '}
      <input id="input" onChange={handleSearch} />
    </>
  );
};

export default Search;
