import React, { useState } from "react";
import "./Calculator.css";

import Button from "../components/button/Button";
import Display from "../components/display/Display";

const operations = ["/", "*", "+", "-", 0];

var operand1, operand2, currentOperation;

function Calculator() {
  function clearMemory() {
    setDisplayValue(0);
  }

  function setOperation(operation) {
    if (operation == "=") {
      operand2 = parseFloat(displayValue);
      setDisplayValue(eval(`${operand1} ${currentOperation} ${operand2}`));
    } else {
      currentOperation = operation;
      operand1 = parseFloat(displayValue);
      setDisplayValue(operation);
    }
  }

  function addDigit(n) {
    if (String(displayValue).includes(".") && n == ".") {
      return;
    }
    if (!operations.includes(displayValue)) {
      setDisplayValue(displayValue + n);
    } else {
      setDisplayValue(n);
    }
  }

  const [displayValue, setDisplayValue] = useState(0);

  return (
    <div className="calculator">
      <Display label={displayValue} />
      <div className="grid">
        <Button label="AC" triple={true} click={(e) => clearMemory()} />
        <Button label="/" click={(e) => setOperation(e)} />
        <Button label="7" click={(e) => addDigit(e)} />
        <Button label="8" click={(e) => addDigit(e)} />
        <Button label="9" click={(e) => addDigit(e)} />
        <Button label="*" click={(e) => setOperation(e)} />
        <Button label="4" click={(e) => addDigit(e)} />
        <Button label="5" click={(e) => addDigit(e)} />
        <Button label="6" click={(e) => addDigit(e)} />
        <Button label="-" click={(e) => setOperation(e)} />
        <Button label="1" click={(e) => addDigit(e)} />
        <Button label="2" click={(e) => addDigit(e)} />
        <Button label="3" click={(e) => addDigit(e)} />
        <Button label="+" click={(e) => setOperation(e)} />
        <Button label="0" double={true} click={(e) => addDigit(e)} />
        <Button label="." click={(e) => addDigit(e)} />
        <Button label="=" click={(e) => setOperation(e)} />
      </div>
    </div>
  );
}

export default Calculator;
