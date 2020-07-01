import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  const fetchCountries = async () => {
    const promise = await axios.get('https://restcountries.eu/rest/v2/all');
    const result = promise.data;
    console.log('countries', result);
    setCountries(result);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log('filteredCountries', filteredCountries);
    setFilterCountries(filteredCountries);
  };

  const handleClick = (country) => {
    setFilterCountries(Array.of(country));
  };

  console.log('length of countries', countries.length);
  return (
    <>
      <Search handleSearch={handleSearch} />

      {/* {
        countries.map((country, index) => (
          <p key={index}>{country.name} 
            <button onClick={() => {handleClick(country);}}> Show </button>
            <img src={country.flag} alt="weather icon" width="5%" height="5%" />
          </p>
        ))
        } */}

      {
        filterCountries.length === 1 ? <Country country={filterCountries[0]} />
        : filterCountries.length < 260 && filterCountries.length > 1 ? (
          filterCountries.map((country, index) => (
            <div key={index}>
            <img src={country.flag} alt="weather icon" width="5%" height="5%" />
            <p key={index}>{country.name} <button onClick={() => {handleClick(country);}}> Show </button></p>
            </div>
          ))
        ) 
        :<p>Too many matches, specify another filter</p>
      }
    </>
  );
};

export default App;
