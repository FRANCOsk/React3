import React, { useState } from "react";

function Form2() {
  const [input, setInput] = useState({ mail: "", pwd: "", date: "" });
  const smena = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mail = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [mail]: value }));
  };

  const send = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(input);
    alert(input);
  };

  return (
    <form onSubmit={send}>
      <>
        <label>
          Email
          <input
            name="mail"
            type="mail"
            value={input.mail || ""}
            onChange={smena}
          />
        </label>
        <br></br>
        <label>
          Password
          <input
            name="pwd"
            type="password"
            value={input.pwd || ""}
            onChange={smena}
          />
        </label>
        <br></br>
        <label>
          Datum
          <input
            name="date"
            type="date"
            value={input.date || ""}
            onChange={smena}
          />
        </label>
        <br></br>
      </>

      <input type="search" />
      <br></br>
      <input type="submit" />
    </form>
  );
}

export default Form2;
