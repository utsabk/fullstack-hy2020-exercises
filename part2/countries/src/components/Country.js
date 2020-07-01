import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather'
import Language from './Language'
import Display from './Display'

const Country = ({ country }) => {
  const [weather, setWeather] = useState('');

  const fetchWeather = async () => {
    const api_key = process.env.REACT_APP_API_KEY;
    console.log('apikey', api_key);
    const promise = await axios.get(
      `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
    );
    const weather = promise.data.current;
    setWeather(weather);
  };

  useEffect(()=>{fetchWeather()},[]);

  console.log('Weather inside Country Comp. :-', weather);

  return (
    <>
      <h1>{country.name}</h1>
      <Display text='Capital' value={country.capital} />
      <Display text='Population' value={country.population} />
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => (
          <Language key={language.nativeName} language={language}/>
        ))}
      </ul>
      <img src={country.flag} alt="flag" width="10%" height="10%" />
      <h2>Weather in {country.capital}</h2>
      <Weather weather={weather}/>
    </>
  );
};

export default Country;
