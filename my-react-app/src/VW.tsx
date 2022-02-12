import React, { useState } from "react";

const VW = () => {
  const [year, setYear] = useState(2022);


   

  return (
    <div>
      <h1>VW</h1>
      <p>Year is {year}</p>
      <button type="button" onClick={()=>setYear(year+1)}>PLUS</button>
      <button type="button" onClick={()=>setYear(year-1)}>MINUS</button>
      
    </div>
  );
};
export default VW;
