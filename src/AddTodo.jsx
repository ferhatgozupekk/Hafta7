import React from "react";

function AddTodo() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements[0]);
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
