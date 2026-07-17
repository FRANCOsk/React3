import { useState } from "react";

function Textarea() {
  const [text, setText] = useState("test");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <form>
      <label htmlFor="example-text">Example text</label>
      <textarea id="example-text" onChange={handleChange} value={text} />
    </form>
  );
}

export default Textarea;
