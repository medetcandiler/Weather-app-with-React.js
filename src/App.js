import './App.css';
import { WeatherProvider } from './contexts/weatherContext';
import List from './components/list';
import Picker from './components/picker';


function App() {
  return (
    <div className="container">
      <WeatherProvider>
        <h2 className='title'>
          Check your city's weather
        </h2>
        <Picker />
        <List />
      </WeatherProvider>
    </div>
  );
}

export default App;
