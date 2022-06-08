import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectOperador() {
  const { select, handleSelect } = useContext(MyContext);
  const { operador } = select;
  return (
    <div>
      <label htmlFor="1">
        Operador:
        <select
          id="1"
          name="operador"
          value={ operador }
          data-testid="comparison-filter"
          onChange={ handleSelect }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
    </div>
  );
}

export default SelectOperador;
