import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { StyleCheckbox } from '../Style/Tabela';

function CheckBoxSort() {
  const { handleChangeFilterSort, orderSort } = useContext(MyContext);
  const { ASC, DESC } = orderSort;

  return (
    <StyleCheckbox>
      <label htmlFor="3">
        Ascedente
        <input
          id="3"
          type="radio"
          name="filterAscendente"
          value={ ASC }
          onChange={ handleChangeFilterSort }
          checked={ ASC }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="2">
        Descedente
        <input
          id="2"
          type="radio"
          name="filterDescedente"
          value={ DESC }
          onChange={ handleChangeFilterSort }
          checked={ DESC }
          data-testid="column-sort-input-desc"
        />
      </label>
    </StyleCheckbox>
  );
}

export default CheckBoxSort;
