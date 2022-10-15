import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "../features/taskList/taskListSlice";

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
