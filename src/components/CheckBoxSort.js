import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function CheckBoxSort() {
  const { handleChangeFilterSort, orderSort } = useContext(MyContext);
  const { filterAscendente, filterDescedente } = orderSort;

  return (
    <div>
      <label htmlFor="1">
        Ascedente
        <input
          id="1"
          type="radio"
          name="filterAscendente"
          onChange={ handleChangeFilterSort }
          checked={ filterAscendente }
        />
      </label>
      <label htmlFor="1">
        Descedente
        <input
          id="1"
          type="radio"
          name="filterDescedente"
          onChange={ handleChangeFilterSort }
          checked={ filterDescedente }
        />
      </label>
    </div>
  );
}

export default CheckBoxSort;
