import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function StarWars() {
  const { search, handleSearch, filterData } = useContext(MyContext);

  const headTable = [
    'name',
    'Rotation_period',
    'Orbital_period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  return (
    <form>
      <label htmlFor="1">
        ProJeto StarWars:
        <input
          id="1"
          type="text"
          value={ search }
          name="search"
          onChange={ handleSearch }
          data-testid="name-filter"
        />
      </label>
      <table>
        <thead>
          <tr>
            {headTable.map((titulo) => (
              <th key={ titulo }>{titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterData.map((dadosApi) => (
            <tr key={ dadosApi.name }>
              <td>{dadosApi.name}</td>
              <td>{dadosApi.rotation_period}</td>
              <td>{dadosApi.orbital_period}</td>
              <td>{dadosApi.diameter}</td>
              <td>{dadosApi.climate}</td>
              <td>{dadosApi.gravity}</td>
              <td>{dadosApi.terrain}</td>
              <td>{dadosApi.surface_water}</td>
              <td>{dadosApi.population}</td>
              <td>{dadosApi.films}</td>
              <td>{dadosApi.created}</td>
              <td>{dadosApi.edited}</td>
              <td>{dadosApi.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default StarWars;
