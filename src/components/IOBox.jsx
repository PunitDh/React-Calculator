import React from 'react';

function IOBox({ input, output }) {

  return (
    <div className="calculator-box">
      <div className="io-box">
        <input type="text" name="input" id="input" value={input} autoFocus={true} />
        <input type="text" name="output" id="output" value={output} readOnly={true} />
      </div>
    </div>
  );
}

export default IOBox;