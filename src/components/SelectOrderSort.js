import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectOrderSort() {
  const { listColun, orderSort, handleChangeFilterSort } = useContext(MyContext);
  const { sortColun } = orderSort;

  return (
    <div>
      <label htmlFor="1">
        Ordenar:
        <select
          id="1"
          value={ sortColun }
          name="sortColun"
          onChange={ handleChangeFilterSort }
        >
          {listColun.map((itenList, index) => (
            <option key={ index }>{itenList}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectOrderSort;
