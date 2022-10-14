import { createSlice } from "@reduxjs/toolkit";
export const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    value: [
      {
        name: "ben",
        id: "123",
        done: true,
      },
      {
        name: "harry",
        id: "456",
        done: false,
      },
    ],
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.value = [...state.value, payload];
    },
    done: (state, param) => {
      const { payload } = param;
      const index = state.value.findIndex((task) => task.id === payload);
      const newArray = [...state.value];
      newArray[index].done = !newArray[index].done;
      state.value = newArray;
    },
    edit: (state, param) => {
      const { payload } = param;
      const index = state.value.findIndex((task) => task.id === payload.id);
      const newArray = [...state.value];
      newArray[index].name = payload.text;
      state.value = newArray;
    },
    remove: (state, param) => {
      const { payload } = param;
      const index = state.value.findIndex((task) => task.id === payload);
      let newArray = [...state.value];

      newArray.splice(index, 1);
      state.value = newArray;
    },
    clear: (state) => {
      state.value = [];
    },
    doneDelete: (state, param) => {
      const { payload } = param;

      state.value = payload;
    },
    update: (state, param) => {
      const { payload } = param;
      state.value = payload;
    },
  },
});
const { actions, reducer } = taskListSlice;
export const { save, clear, done, remove, doneDelete, update, edit } =
  taskListSlice.actions;
export default taskListSlice.reducer;
