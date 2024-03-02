import React, { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Tinder Jobs</h1>
      <div className="App">
        {!isLoggedIn ? (
          <Login onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <div>Welcome to Tinder Jobs!</div>
        )}
      </div>
    </>
  );
}

export default App;