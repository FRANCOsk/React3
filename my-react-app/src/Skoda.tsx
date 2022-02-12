import React, { useState } from "react";

const Skoda = () => {
  const [skoda, setSkoda] = useState({
    model: "Fabia",
    color: "red",
    year: "2021",
  });
  const setColor = () => {
    setSkoda((state) => {
      return { ...state, color: "blue", model: "Oktavia" };
    });
  };

  return (
    <>
      <h1 style={{ marginLeft: "30px" }}>SKODA</h1>
      <p>Model is {skoda.model}</p>
      <p>Color is {skoda.color}</p>
      <p>Year is {skoda.year}</p>
      <button type="button" onClick={setColor}>
        Blue
      </button>
    </>
  );
};

export default Skoda;
