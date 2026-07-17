import { useCallback, useState } from "react";
import Todos from "./ToDo";

function Callback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<any[]>([]);

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((currentTodos) => [...currentTodos, "new Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button type="button" onClick={increment}>
          PLUS
        </button>
      </div>
    </>
  );
}

export default Callback;
