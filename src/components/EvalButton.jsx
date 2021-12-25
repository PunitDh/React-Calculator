import React from 'react';

function EvalButton({ input, setOutput, setEvaled }) {
  const evaluateExpression = () => {
    let value;
     try {
       value = eval(input.replace('x','*'));
     } catch {
       value = "Syntax Error";
     }
     return value;
  }

  const handleClick = () => {
    setOutput(evaluateExpression());
    setEvaled(true);
  };

  return (
    <input onClick={handleClick} className="btn" type="button" value="=" />
  );
}

export default EvalButton;