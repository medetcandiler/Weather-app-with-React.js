import React, { useEffect } from 'react';
import { useWeather } from '../contexts/weatherContext';
import ListItem from './listItem';
import Spinner from '../elements/spinner/spinner';
import Error from './error';


function List() {
  const { data, loading, error } = useWeather()

  const dailyData = {}

  if (!data) {
    return false
  } else {
    data.list.map(item => {
      const date = item.dt_txt.split(' ')[0];
      if (!dailyData[date]) {
        dailyData[date] = [item];
      } else {
        dailyData[date].push(item);
      }
    });
  }

  const dailyDataArray = Object.entries(dailyData).map(([date, forcastArray]) => {
    return {
      date,
      forecasts: forcastArray,
    }
  })
  const today = new Date().toLocaleDateString();

  return (
    <>
      {error && <Error />}
      <div className='list-container'>
        {loading ? <Spinner /> : dailyDataArray.map(day =>
          <div key={day.date} className={`date ${new Date(day.date).toLocaleDateString() === today ? 'today' : ''}`}>
            <div className='date'>
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div>
              <ListItem
                key={day.forecasts[0].dt}
                date={day.forecasts[0].dt_txt}
                description={day.forecasts[0].weather[0].description}
                icon={day.forecasts[0].weather[0].icon}
                maxTemp={day.forecasts[0].main.temp}
                minTemp={day.forecasts[day.forecasts.length-1].main.temp_min}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )

}

export default List;



// <ListItem
//                 key={day.forecasts[0].dt}
//                 date={day.forecasts[0].dt_txt}
//                 description={day.forecasts[0].weather[0].description}
//                 icon={day.forecasts[0].weather[0].icon}
//                 maxTemp={day.forecasts[0].main.temp}
//                 minTemp={day.forecasts[day.forecasts.length-1].main.temp_min}
//               />