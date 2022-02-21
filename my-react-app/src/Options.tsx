import { EventHandler, useState } from "react";

function Options() {

    const [options, setOptions] = useState("test");
  const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions(event.target.value);
  };
  console.log(options);  

  return (
    <form>
        
      <select onChange={change} value={options}>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
      </select>    
    </form>
    
  );
  
}

export default Options;
