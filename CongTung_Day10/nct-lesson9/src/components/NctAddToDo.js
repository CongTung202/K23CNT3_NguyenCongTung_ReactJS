import { useState } from "react";

function NctAddToDo({ dispatch }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };
  return (
    <form className=" text-center" onSubmit={handleSubmit}>
      <input
        className="form-control "
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập Tên"
      />
      <button className="btn btn-primary" type="submit">
        Thêm
      </button>
    </form>
  );
}
export default NctAddToDo;
