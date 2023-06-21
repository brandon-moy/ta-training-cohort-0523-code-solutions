import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton color="red" text="Red Button" />
      <ToggleButton color="blue" text="Blue Button" />
      <ToggleButton color="green" text="Green Button" />
    </div>
  );
}

export default App;
