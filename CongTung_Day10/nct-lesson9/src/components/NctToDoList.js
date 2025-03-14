import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/NctReducerToDo";
import NctAddToDo from "./NctAddToDo";
import NctAddToDoItems from "./NctAddToDoItems";
function NctToDoList() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <h2 className="text-center">Danh Sách Con Vợ</h2>
      <NctAddToDo dispatch={dispatch} />
      <ul>
        {todos.map((todo) => (
          <NctAddToDoItems key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}
export default NctToDoList;
