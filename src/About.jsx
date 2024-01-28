import { useReducer } from "react";
import {
  DECREMENT,
  INCREMENT,
  RESET,
  countReducer,
  initialCountState,
} from "./reducer";

export default function About() {
  const [count, dispatch] = useReducer(countReducer, initialCountState);
  return (
    <>
      <h2>Hakkında Sayfası</h2>
      <h2>sayaç ::: {count} </h2>
      <button onClick={() => dispatch(INCREMENT)}>arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>azalt</button>
      <button onClick={() => dispatch(RESET)}>sıfırla</button>
    </>
  );
}
