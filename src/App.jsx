import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function arttir() {
    setCount((prev) => prev + 1);
  }
  function azalt() {
    setCount((prev) => prev - 1);
  }
  function sifirla() {
    setCount(0);
  }

  return (
    <>
      <h2>sayaç ::: {count} </h2>
      <button onClick={arttir}>arttır</button>
      <button onClick={azalt}>azalt</button>
      <button onClick={sifirla}>sıfırla</button>
    </>
  );
}

export default App;
