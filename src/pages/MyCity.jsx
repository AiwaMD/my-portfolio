import React, { useState, useEffect } from 'react';
import { getWeather } from '../api/weatherApi'; 

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather('Київ').then(data => setWeather(data));
  }, []);

  return (
    <div>
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України, місто з багатою історією.</p>
      
      {weather ? (
        <div>
          <h2>Погода зараз:</h2>
          <p>Температура: {weather.temp_c}°C</p>
          <p>Опис: {weather.condition.text}</p>
          <p>Координати: {weather.lat}, {weather.lon}</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
}

export default MyCity;
