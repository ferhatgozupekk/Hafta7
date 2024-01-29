import { createContext, useReducer } from "react";
import { countReducer, initialCountState } from "../reducer/counter";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const [count, dispatch] = useReducer(countReducer, initialCountState);

  const context = { counter: { state: count, dispatch } };

  return (
    <SiteContext.Provider value={context}>{children}</SiteContext.Provider>
  );
}

export { SiteContext, SiteContextProvider };
