import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [], 
};

const todoSlice = createSlice({
  name: "todos", 
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload); 
    },
    deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) =>todo.id !== action.payload)
    },
    editTodo: (state,action) => {
        const {id,task,imageUrl} = action.payload
        const todo = state.todos.find((todo) => todo.id === id)
        if(todo) {
            todo.task = task
            todo.imageUrl = imageUrl
        }
    }
  },
});

export const { addTodo ,deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer; 
