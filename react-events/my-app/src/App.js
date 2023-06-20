import './App.css';
import CustomButton from './CustomButton';

function App() {
  const handleCustomClick = (text) => {
    window.alert(`Clicked ${text}`);
  };

  return (
    <div className="App">
      <CustomButton
        color="red"
        text="slappadoo"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="blue"
        text="rapparoo"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="green"
        text="blappaboo"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
