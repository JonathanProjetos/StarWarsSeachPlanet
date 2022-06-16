import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StarWars from './pages/StarWars';
import MyProvider from './context/MyProvider';
import './Style/style.css';

const globalStyles = createGlobalStyle;

function App() {
  return (
    <div>
      <globalStyles>
        <MyProvider>
          <StarWars />
        </MyProvider>
      </globalStyles>
    </div>
  );
}

export default App;
