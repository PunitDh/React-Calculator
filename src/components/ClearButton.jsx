import React from 'react';

function ClearButton({ setInput, setOutput }) {
  const handleClick = () => {
    setOutput(0);
    setInput('');
  };

  return (
    <input onClick={handleClick} className="btn" type="button" value="C" />
  );
}

export default ClearButton;