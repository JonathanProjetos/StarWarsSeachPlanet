import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ButtonOrder() {
  const { handleClickOrder } = useContext(MyContext);
  return (
    <div>
      <button
        type="button"
        onClick={ handleClickOrder }
        data-testid="column-sort-button"
      >
        Order
      </button>
    </div>
  );
}

export default ButtonOrder;
