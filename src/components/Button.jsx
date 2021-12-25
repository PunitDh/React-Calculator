import React from 'react';

function Button({ properties, value }) {
  const { input, evaled, setInput, setEvaled } = properties;

  function handleClick() {
    if (evaled) {
      setInput(value);
      setEvaled(false);
    } else {
      setInput(input + value);
    }
  }

  return (
    <button onClick={handleClick} className="btn" type="button">{value}</button>
  );
}

export default Button;