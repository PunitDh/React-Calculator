import React from 'react';
import OperationsBox from "./OperationsBox";
import NumbersBox from "./NumbersBox";

function ButtonsBox({ input, setInput, setOutput, evaled, setEvaled }) {
  return (
    <div className="calculator-box buttons-box">
      <NumbersBox input={input} setInput={setInput} setOutput={setOutput} evaled={evaled} setEvaled={setEvaled} />
      <OperationsBox input={input} setInput={setInput} />
    </div>
  );
}

export default ButtonsBox;