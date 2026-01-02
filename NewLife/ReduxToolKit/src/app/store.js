import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer
  }
});
