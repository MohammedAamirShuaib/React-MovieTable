import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({
  onReset,
  counters,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <React.Fragment>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
