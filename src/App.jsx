import { useReducer, useState } from "react";
import About from "./About";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  countReducer,
  initialCountState,
} from "./reducer";

function App() {
  const [count, dispatch] = useReducer(countReducer, initialCountState);

  return (
    <>
      <h2>sayaç ::: {count} </h2>
      <button onClick={() => dispatch(INCREMENT)}>arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>azalt</button>
      <button onClick={() => dispatch(RESET)}>sıfırla</button>
      <About />
    </>
  );
}

export default App;
