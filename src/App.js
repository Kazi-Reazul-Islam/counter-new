import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container my-5">
      <div className="card w-75 mb-3 text-center">
        <div className="card-body">
          <h1 className="card-title">Counter App</h1>
          <h2 className="card-text">{count}</h2>

          <button onClick={increment} className="btn btn-primary mx-3">
            Increment
          </button>

          <button
            onClick={decrement}
            className="btn btn-danger mx-3"
            disabled={count === 0}
          >
            Decrement
          </button>

          <button onClick={reset} className="btn btn-secondary mx-3">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
