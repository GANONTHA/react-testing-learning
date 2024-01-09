import React from "react";
import { useState } from "react";

const Count = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Count Component</h1>
      <h1>Counter</h1>
      <h2 data-testid="counter">{counter}</h2>
      <button data-testid="increment" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button data-testid="decrement" onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
};

export default Count;
