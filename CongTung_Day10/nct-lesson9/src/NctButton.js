import React, { useState } from "react";

export default function NctButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickDown() {
    setCount(count - 1);
  }
  function handleClickReset() {
    setCount(0);
  }
  return (
    <div>
      <h1>Value Count:{count}</h1>
      <button className="btn btn-primary mx-3" onClick={handleClick}>
        Increase
      </button>
      <button className="btn btn-danger mx-3" onClick={handleClickDown}>
        Decrease
      </button>
      <button className="btn btn-success mx-3" onClick={handleClickReset}>
        Reset
      </button>
    </div>
  );
}
