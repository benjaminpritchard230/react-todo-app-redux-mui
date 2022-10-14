import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskListReducer from "../features/taskList/taskListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    taskList: taskListReducer,
  },
});
