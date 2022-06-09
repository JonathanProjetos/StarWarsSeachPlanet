import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const listColun = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState({
    coluna: 'population',
    operador: 'maior que',
    inputNumber: 0,
  });
  const [filterNumber, setFilterNumber] = useState([]);
  const [listColuna, setlistaColuna] = useState(listColun);

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

    const arrayFilter = filterNumber.reduce((acc, cur) => acc.filter((planet) => {
      switch (cur.operador) {
      case 'maior que':
        return Number(planet[cur.coluna]) > Number(cur.inputNumber);
      case 'menor que':
        return Number(planet[cur.coluna]) < Number(cur.inputNumber);
      case 'igual a':
        return Number(planet[cur.coluna]) === Number(cur.inputNumber);
      default:
        return true;
      }
    }), filterSearch);

    setFilterData(arrayFilter);
  }, [search, filterNumber]);

  const handleSearch = ({ target }) => {
    setSearch(target.value.toLowerCase());
  };

  const handleSelect = ({ target }) => {
    const { name, value } = target;
    setSelect({
      ...select,
      [name]: value,
    });
  };

  const handleClickFiltrar = () => {
    const { coluna, inputNumber, operador } = select;
    const filterNumberColum = filterData.filter((planeta) => {
      if (operador === 'maior que') {
        return Number(planeta[coluna]) > Number(inputNumber);
      }
      if (operador === 'menor que') {
        return Number(planeta[coluna]) < Number(inputNumber);
      }

      return Number(planeta[coluna]) === Number(inputNumber);
    });
    setFilterData(filterNumberColum);
    setFilterNumber((prev) => ([...prev, select]));
    const selectFiltrados = listColuna.filter((dados) => dados !== coluna);
    setlistaColuna(selectFiltrados);
    setSelect({
      coluna: selectFiltrados[0],
      operador: 'maior que',
      inputNumber: 0,
    });
  };

  const handleRemove = ({ target }) => {
    const filterRemove = filterNumber.filter((iten) => iten.coluna !== target.name);
    setFilterNumber(filterRemove);
  };

  const removeAllFilters = () => {
    const resetFilter = data;
    // const removeAllFilter = filterNumber.filter((iten) => iten === target.name);
    setFilterNumber([]);
    setFilterData(resetFilter);
    setlistaColuna(listColun);
  };

  useEffect(() => {
    const newColun = listColun.reduce((acc, cur) => {
      if (filterNumber.some((f) => f.coluna === cur)) {
        return acc;
      }
      acc.push(cur);
      return acc;
    }, []);
    setlistaColuna(newColun);
  }, [filterNumber]);

  const context = {
    filterData,
    search,
    select,
    handleSearch,
    handleSelect,
    handleClickFiltrar,
    filterNumber,
    listColuna,
    handleRemove,
    removeAllFilters,
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
