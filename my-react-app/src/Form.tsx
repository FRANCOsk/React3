import { useState } from "react";

function Okno() {
  const [input, setInput] = useState({hodnota:"", hodnota2:"",name: ""});
  const zmena = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const enter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={enter}>
      <label>
        Info
        <input
          name="name"
          type="text"
          value={input.name || ""}
          onChange={zmena}
        />
      </label>
      <label>
        Hodnota
        <input
          name="hodnota"
          type="text"
          value={input.hodnota || ""}
          onChange={zmena}
        />
      </label>
      <label>
        Hodnota2
        <input
          name="hodnota2"
          type="text"
          value={input.hodnota2 || ""}
          onChange={zmena}
        />
      </label>
      <label>Name</label>
      <input type="submit" />
    </form>
  );
}

export default Okno;
