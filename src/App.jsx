import { useReducer, useState, useContext } from "react";
import About from "./About";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  countReducer,
  initialCountState,
} from "./reducer";
import { SiteContext } from "./context/SiteContext";
import ContextAboutPage from "./ContextAboutPage";

function App() {
  // const [count, dispatch] = useReducer(countReducer, initialCountState);

  const {
    counter: { state, dispatch },
  } = useContext(SiteContext);
  console.log(state);

  return (
    <>
      <h2>sayaç ::: {state} </h2>
      <button onClick={() => dispatch(INCREMENT)}>arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>azalt</button>
      <button onClick={() => dispatch(RESET)}>sıfırla</button>
      <hr />
      <hr />
      <ContextAboutPage />
      <hr />
      <hr />
      <About />
    </>
  );
}

export default App;
