import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectColuna() {
  const { select, handleSelect, listColuna } = useContext(MyContext);
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
          {listColuna.map((lista, index) => (
            <option key={ index }>{lista}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectColuna;
