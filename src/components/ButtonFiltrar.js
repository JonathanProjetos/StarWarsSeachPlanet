import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ButtonFiltrar() {
  const { handleClickFiltrar } = useContext(MyContext);
  return (
    <div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFiltrar }
      >
        Filtrar
      </button>
    </div>
  );
}

export default ButtonFiltrar;
