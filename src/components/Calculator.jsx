import React, { useState } from 'react';
import IOBox from "./IOBox";
import ButtonsBox from "./ButtonsBox";
import "./Calculator.css";


function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);
  const [evaled, setEvaled] = useState(false);

  return (
    <>
      <IOBox input={input} output={output} />
      <ButtonsBox input={input} setInput={setInput} evaled={evaled} setEvaled={setEvaled} setOutput={setOutput} />
    </>
  )
}

export default Calculator;