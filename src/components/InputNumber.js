import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputNumber() {
  const { select, handleSelect } = useContext(MyContext);
  const { inputNumber } = select;
  return (
    <div>
      <input
        type="number"
        name="inputNumber"
        value={ inputNumber }
        data-testid="value-filter"
        onChange={ handleSelect }
      />
    </div>
  );
}

export default InputNumber;
