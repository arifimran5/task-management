import { createSlice } from "@reduxjs/toolkit";

const initialTasks = [
  {
    id: 1,
    title: "Get that shit done",
    isCompleted: false,
    priority: "high", //low, moderate, high
    due_date: "Wed May 10 2023 19:17:25 GMT+0530 (India Standard Time)",
  },
  {
    id: 2,
    title: "take warm bath",
    isCompleted: true,
    priority: "low", //low, moderate, high
    due_date: "Wed May 08 2023 19:17:25 GMT+0530 (India Standard Time)",
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState: initialTasks,
  reducers: {
    createTask: (state, action) => {
      const task = action.payload.task;
      state.push(task);
    },
    editTask: (state, action) => {
      const newTask = action.payload.task;

      const oldTaskIdx = state.findIndex((task) => task.id === newTask.id);
      state.splice(oldTaskIdx, 1, newTask);

      // return state.map((task) => {
      //   if (task.id == newTask.id) {
      //     return { ...task, ...newTask };
      //   }
      //   return task;
      // });
    },
    deleteTask: (state, action) => {
      const id = action.payload.id;
      const oldTaskIdx = state.findIndex((task) => task.id === id);
      state.splice(oldTaskIdx, 1);
    },
    completeTask: (state, action) => {
      const id = action.payload.id;
      return state.map((task) => {
        if (task.id == id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    },
  },
});

export const { completeTask, createTask, deleteTask, editTask } =
  taskSlice.actions;
