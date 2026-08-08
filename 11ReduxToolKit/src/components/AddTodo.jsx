import React, { useState } from "react";
import { addTodo, updateTodo } from "../features/todo/Todoslice";
import { useDispatch } from "react-redux";

function AddTodo({ isTodoEditable, setIsTodoEditable }) {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (isTodoEditable && input.length > 0) {
      dispatch(updateTodo(input));
      setIsTodoEditable((prev) => !prev);
      setInput("");
    } else {
      if (input.length > 0) {
        dispatch(addTodo(input));
        setInput("");
      } else {
        alert("Enter the Todo first");
      }
    }
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 w-3xl mx-auto">
      <input
        type="text"
        maxLength={100}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isTodoEditable ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
}

export default AddTodo;
