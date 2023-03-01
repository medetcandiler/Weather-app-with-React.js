import React from 'react';
import { useWeather } from '../contexts/weatherContext';

function ListItem({ maxTemp, minTemp, description, icon }) {
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  const { loading } = useWeather();

  return (
    <div className='weather-report'>
      <div className='icon'>
        <img src={iconUrl} alt={description} />
      </div>
      <div className='details'>
        <div className='temp'>
          <div>{Math.ceil(maxTemp)}°C</div>
          <div className='light-temp'>{Math.floor(minTemp)}°C</div>
        </div>
        <div className='description'>{description[0].toUpperCase() + description.slice(1)}</div>
      </div>
    </div>
  )
}

export default ListItem;
