import React from 'react';
import Button from "./Button";

function OperationsBox({ input, setInput }) {
  const properties = { input, setInput }
  return (
    <div className="operations-box">
      <Button properties={properties} value="+" />
      <Button properties={properties} value="-" />
      <Button properties={properties} value="x" />
      <Button properties={properties} value="/" />
    </div>
  );
}

export default OperationsBox;