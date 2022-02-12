import { createRef, useEffect, useRef, useState } from "react";

function Kia() {
  const [inputValue, setInputValue] = useState("");
  
  const inputElement = createRef<HTMLInputElement>();
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = inputValue;
 }, [inputValue]);

  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };
  return (
    <>
      <h1>KIA</h1>
      <input
        type="text"
        ref={inputElement}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={focusInput}>Focus</button>
      <p>Curent value: {inputValue}</p>
      <p>Previous value: {previousValue.current}</p>
    </>
  );
}


export default Kia;
