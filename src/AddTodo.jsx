import React, { useReducer } from "react";
import { ADD_TODO, REMOVE_TODO, initial, todoReducer } from "./reducer/todo";

function AddTodo() {
  const [state, dispatch] = useReducer(todoReducer, initial);
  console.log("state" + state);
  console.log("dispatch" + dispatch);
  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements[0].value;
    dispatch({ type: ADD_TODO, payload: inputValue });
    event.target.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo bilgisini giriniz" />
        <button type="submit">Ekle</button>
      </form>

      <ul>
        {state?.todos?.map((item) => (
          <li
            key={item.id}
            onClick={() => dispatch({ type: REMOVE_TODO, payload: item.id })}
          >
            {item.id}---{item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddTodo;
