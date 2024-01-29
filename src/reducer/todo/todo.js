import { ADD_TODO, REMOVE_TODO, RESET } from "./actionType";

export const initial = {
  todos: [],
  todo: "",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      console.log(REMOVE_TODO);
      return state;
    case RESET:
      console.log(RESET);
      return initial;
    default:
      console.log("Default State", action);
      return state;
  }
};
