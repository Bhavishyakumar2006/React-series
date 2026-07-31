import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {}

})

export const TodoContextProvider = TodoContext.Provider

export function useTodo () {
    return useContext(TodoContext)
}