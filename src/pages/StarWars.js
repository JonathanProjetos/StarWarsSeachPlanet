import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import SelectColuna from '../components/SelectColuna';
import SelectOperador from '../components/SelectOperador';
import InputNumber from '../components/InputNumber';
import ButtonFiltrar from '../components/ButtonFiltrar';
import ButtonRemoveAllFilters from '../components/ButtonRemoveAllFilters';
import SelectOrderSort from '../components/SelectOrderSort';
import CheckBoxSort from '../components/CheckBoxSort';
import { StyleInput, StyleTabela, StyleImg, StyleForm } from '../Style/Tabela';
import logo from '../Style/logo.png';

function StarWars() {
  const {
    search,
    handleSearch,
    filterData,
    filterNumber,
    handleRemove,
  } = useContext(MyContext);

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
    <StyleForm>
      <StyleImg>
        <div>
          <img src={ logo } alt="logo starwars" />
        </div>
        <div>
          <StyleInput
            type="text"
            value={ search }
            name="search"
            onChange={ handleSearch }
            placeholder="Pesquise um Planeta"
            data-testid="name-filter"
          />
        </div>
      </StyleImg>
      <div>
        <SelectColuna />
        <SelectOperador />
        <InputNumber />
        <ButtonFiltrar />
        <ButtonRemoveAllFilters />
        <SelectOrderSort />
        <CheckBoxSort />
      </div>
      <div>
        {filterNumber.map((selectFilter, index) => (
          <p
            key={ index }
            data-testid="filter"
          >
            {`${selectFilter.coluna} 
                ${selectFilter.operador} 
                ${selectFilter.inputNumber} `}
            <button
              name={ selectFilter.coluna }
              type="button"
              onClick={ handleRemove }
            >
              Remove
            </button>
          </p>
        ))}
      </div>
      <StyleTabela>
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
      </StyleTabela>
    </StyleForm>
  );
}

export default StarWars;
