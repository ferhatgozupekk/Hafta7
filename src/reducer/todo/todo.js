import { ADD_TODO, REMOVE_TODO, RESET } from "./actionType";

export const initial = {
  todos: [],
  todo: "",
};

export const todoReducer = (state, action) => {
  switch (action) {
    case ADD_TODO:
      console.log(ADD_TODO, state);
      return state;
    case REMOVE_TODO:
      console.log(REMOVE_TODO);
      return state;
    case RESET:
      console.log(RESET);
      return initial;
    default:
      console.log("Default State");
      return state;
  }
};
