import React from 'react';

const Weather = ({weather}) => {
  return (
    <>
      {
      console.log('Im inside WEATHER return()'),
      console.log('Weather params :-',weather)

      }
      <p><strong>Temperature:</strong> {weather.temperature} Celcius </p>
      {
        weather.weather_icons
          ? <img src={weather.weather_icons.pop()}alt="weather icon" width="5%" height="5%" />
          : ''
      }
      <p> <strong>Wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir} </p>
    </>
  );
};

export default Weather;
