import React, { useEffect, useState } from "react";

const Audi = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <>
      <h1>AUDI</h1>
      <p>Count is {count}</p>
      <p> Current time is:<b> {time.toLocaleTimeString()}</b></p>
      {/* <button type="button" onClick={() => setCount(count + 1)}>
        PLUS
      </button> */}
    </>
  );
};
export default Audi;

