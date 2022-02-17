import { useCallback, useState } from "react";
import Todos from "./ToDo";

function Callback() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState<any[]>([]);

  const inkrement = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new Todo"]);
  }, [todos]);

 


  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
    <hr></hr>
    <div>Count: {count}<button onClick={inkrement}>PLUS</button></div>
    </>
  );
}

export default Callback;
