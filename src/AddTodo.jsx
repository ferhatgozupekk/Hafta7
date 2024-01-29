import React, { useReducer } from "react";
import { ADD_TODO, initial, todoReducer } from "./reducer/todo";

function AddTodo() {
  const [state, dispatch] = useReducer(todoReducer, initial);
  console.log("state" + state);
  console.log("dispatch" + dispatch);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements[0]);
    dispatch(ADD_TODO);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo bilgisini giriniz" />
        <button type="submit">Ekle</button>
      </form>
    </>
  );
}

export default AddTodo;
