import React, { useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import validateInput from '../../utils/validation';

function Insertion({ type, onSubmit, isValid }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type={type} value={input} onChange={handleInputChange} />
        <button type="submit">
          <FaRegArrowAltCircleRight />
        </button>
        {!isValid && <p>Ingreso inválido</p>}
      </form>
    </div>
  );
}

export default Insertion;