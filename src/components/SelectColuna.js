import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectColuna() {
  const { select, handleSelect } = useContext(MyContext);
  const { coluna } = select;
  return (
    <div>
      <label htmlFor="1">
        Coluna:
        <select
          id="1"
          name="coluna"
          value={ coluna }
          data-testid="column-filter"
          onChange={ handleSelect }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
    </div>
  );
}

export default SelectColuna;
