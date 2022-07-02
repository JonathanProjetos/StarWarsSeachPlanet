import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StarWars from './pages/StarWars';
import MyProvider from './context/MyProvider';
import './Style/style.css';

const GlobalStyles = createGlobalStyle``;

function App() {
  return (
    <div>
      <MyProvider>
        <GlobalStyles />
        <StarWars />
      </MyProvider>
    </div>
  );
}

export default App;
