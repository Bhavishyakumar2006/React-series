import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    updateTodoId: undefined
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.unshift(todo)
        },
        removeTodo: (state, action) => {
           state.todos =  state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === state.updateTodoId ? {...todo, text: action.payload} : todo)
        },
        UpdateTodoId: (state, action) => {
            state.updateTodoId = action.payload
        }
    }
})

export const {addTodo, removeTodo, updateTodo, UpdateTodoId} = todoSlice.actions
export default todoSlice.reducer