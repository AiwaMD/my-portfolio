import React, { useState, useEffect } from 'react';

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = 'Kyiv';

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=a5c20365aa5f46da9b4120729251505&q=${city}&lang=uk`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України, одне з найдавніших міст Східної Європи з багатою історією, культурою та архітектурою.</p>

      {loading && <p>Завантаження погоди...</p>}

      {weather && weather.location && weather.current && (
        <div>
          <h2>Погода зараз у {weather.location.name}, {weather.location.country}:</h2>
          <p>Температура: {weather.current.temp_c}°C</p>
          <p>Опис: {weather.current.condition.text}</p>
          <p>Координати: {weather.location.lat}, {weather.location.lon}</p>
        </div>
      )}

      {!loading && !weather && <p>Не вдалося завантажити погоду.</p>}
    </div>
  );
}

export default MyCity;
