import { useWeather } from '../contexts/weatherContext';
import Select from "react-select";

function Picker() {
  const { cities, setCity } = useWeather();

  const handleChange = (e) => {
    setCity(e);
  }

  const styles = {
    control: (provided) => ({
      ...provided,
      width: 200,
      cursor: 'pointer',
    }),
  };

  const defaultValue = cities[33]

  return (
    <div className='picker-container'>
      <Select
        defaultValue={defaultValue}
        placeholder='Select a city'
        options={cities}
        onChange={handleChange}
        styles={styles}
      />
    </div>
  )
}

export default Picker

