import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ButtonRemoveAllFilters() {
  const { removeAllFilters } = useContext(MyContext);
  return (
    <div>
      <button
        name="coluna"
        type="button"
        onClick={ removeAllFilters }
        data-testid="button-remove-filters"
      >
        Remover Todos os Filtros
      </button>
    </div>
  );
}

export default ButtonRemoveAllFilters;
