import axios from 'axios';

const API_KEY = '03b5d1d05b9e4b1c90b1336e8b9fd30a';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';


export async function getWeather(city) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}&lang=uk`);
    return {
      temp_c: response.data.current.temp_c,
      condition: response.data.current.condition,
      lat: response.data.location.lat,
      lon: response.data.location.lon,
      city: response.data.location.name,
      country: response.data.location.country
    };
  } catch (error) {
    console.error('Помилка запиту погоди:', error);
    return null;
  }
}
