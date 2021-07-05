import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleDecrease = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn" onClick={handleReset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          incease later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
