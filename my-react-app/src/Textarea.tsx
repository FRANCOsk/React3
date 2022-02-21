import { EventHandler, useState } from "react";

function Textarea() {
  const [textarea, setTextarea] = useState("test");
  const change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.target.value);
  };
  console.log(textarea);  

  return (
    <form>
      <textarea onChange={change} value={textarea} />
    </form>
    
  );
  
}

export default Textarea;
