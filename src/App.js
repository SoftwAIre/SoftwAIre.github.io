import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';

import axios from 'axios';
import './App.css';

function App() {
  const [setMessages] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/messages/')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error("there was an error fetching the messages!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <Header />
          <Hero />
          <Features />
        </div>
      </header>
    </div>
  );
}

export default App;
