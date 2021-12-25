import React from 'react';
import Button from "./Button";
import EvalButton from "./EvalButton";
import ClearButton from "./ClearButton";

function NumbersBox({ input, setInput, setOutput, evaled, setEvaled }) {
  const properties = { evaled, setEvaled, input, setInput }
  return (
    <div>
      <div className="button-row">
        <Button properties={properties} value="9" />
        <Button properties={properties} value="8" />
        <Button properties={properties} value="7" />
      </div>
      <div className="button-row">
        <Button properties={properties} value="6" />
        <Button properties={properties} value="5" />
        <Button properties={properties} value="4" />
      </div>
      <div className="button-row">
        <Button properties={properties} value="3" />
        <Button properties={properties} value="2" />
        <Button properties={properties} value="1" />
      </div>
      <div className="button-row">
        <ClearButton setInput={setInput} setOutput={setOutput} />
        <Button properties={properties} value="0" />
        <EvalButton input={input} setOutput={setOutput} setEvaled={setEvaled} />
      </div>
    </div>
  );
}

export default NumbersBox;