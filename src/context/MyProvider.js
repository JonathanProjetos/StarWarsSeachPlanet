import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchApiStarWars = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(url);
      const results = await request.json();
      const resultApi = await results.results;
      setData(resultApi);
      setFilterData(resultApi);
    };
    fetchApiStarWars();
  }, []);

  const filterResidents = data.filter((dados) => delete dados.residents);

  useEffect(() => {
    const filterSearch = filterResidents
      .filter((searchName) => searchName.name.toLowerCase().includes(search));
    setFilterData(filterSearch);
  }, [search]);

  const handleSearch = ({ target }) => {
    setSearch(target.value.toLowerCase());
  };

  const context = {
    filterData,
    search,
    handleSearch,
    filterResidents,
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
