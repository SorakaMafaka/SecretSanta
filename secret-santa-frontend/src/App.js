import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message from the backend: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
