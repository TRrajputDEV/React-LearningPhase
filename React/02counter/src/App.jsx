import { useState } from 'react';
import './App.css';

function App() {
  const [Counter, setCounter] = useState(0);

  const addValue = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
    }
  };

  const decValue = () => {
    if (Counter > -1) {
      setCounter(Counter - 1);
    }
  };

  return (
    <div className="container">
      <div className="counter-box">
        <h1 className={`counter ${Counter === 20 ? 'max' : Counter === -1 ? 'min' : ''}`}>
          {Counter}
        </h1>
      </div>
      <div className="button-group">
        <button className="btn add" onClick={addValue}>
          Add
        </button>
        <button className="btn remove" onClick={decValue}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
