import { memo } from "react";


const Todos = ({todos, addTodo}:any) => {
  console.log("childRender");
  return (
    <>
      <h2>myTodos</h2>
      {todos.map((todo: any, index: any) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
