import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiStarWars = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(url);
      const results = await request.json();
      const resultApi = await results.results;
      setData(resultApi);
    };
    fetchApiStarWars();
  }, []);

  const context = {
    data,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default MyProvider;
