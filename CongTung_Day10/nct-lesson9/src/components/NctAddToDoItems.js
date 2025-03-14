export default function NctAddToDoItems({ todo, dispatch }) {
  return (
    <li
      className="list-group-item"
      style={{ textDecoration: todo.complete ? "line-throw" : "none" }}
    >
      <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
        {todo.text}
      </span>
      <button
        className="btn btn-danger mx-5 px-3"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        x
      </button>
    </li>
  );
}
