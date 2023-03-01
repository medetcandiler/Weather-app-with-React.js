import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import cities from '../cityOfTurkey/cities_of_turkey.json'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [city, setCity] = useState(cities[33]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true)
      try {
        const { data } = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=4446aba85d998a3f7261d7314882bd33&units=metric`);
        setData(data);
      } catch (err) {
        console.log(err)
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getWeatherData();
  }, [city])

  console.log(data)

  const values = { data, setData, city, setCity, cities, loading, setLoading, error };

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => {
  return useContext(WeatherContext)
}

