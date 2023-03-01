import './App.css';
import { WeatherProvider } from './contexts/weatherContext';
import List from './components/list';
import Picker from './components/picker';


function App() {
  return (
    <div className="container">
      <WeatherProvider>
        <Picker />
        <List />
      </WeatherProvider>
    </div>
  );
}

export default App;
