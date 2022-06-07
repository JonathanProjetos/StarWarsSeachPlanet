import React from 'react';
import './App.css';
import StarWars from './pages/StarWars';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <div>
      <MyProvider>
        <StarWars />
      </MyProvider>
    </div>
  );
}

export default App;
