import React, { createContext, useContext, useState } from "react";

const menoContext = createContext("");
function Home() {
  const [meno, setMeno] = useState("Jozef");

  return (
    <div>
      <menoContext.Provider value={meno}>
        <div style={{ marginLeft: "150px" }}>
          <h1 style={{ marginLeft: "150px"}}>
            HOME <br></br>
            {meno}
          </h1>
          <Popis />
          <Pozdrav />
        </div>
      </menoContext.Provider>
      <button type="button" onClick={() => setMeno(getName(meno))}>
        Nastav meno
      </button>
    </div>
  );
}




function Pozdrav() {
  const name = useContext(menoContext);
  return <p><b>{name}</b></p>;
}

function Popis() {
  return <p>Popis</p>;
}

function getName(name: string): string {
  return name === "Peter" ? "Jozef" : "Peter";
}

export default Home;
