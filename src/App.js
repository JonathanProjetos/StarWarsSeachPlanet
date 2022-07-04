import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StarWars from './pages/StarWars';
import MyProvider from './context/MyProvider';
import './Style/style.css';

// eslint-disable-next-line no-unused-vars
const globalStyles = createGlobalStyle``;

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
