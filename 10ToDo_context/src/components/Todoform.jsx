import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function Todoform() {
  const [todomsg, setTodomsg] = useState('')

  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (todomsg && todomsg.length > 0) {
      addTodo({id: Date.now(), todoMsg: todomsg, completed: false})
      setTodomsg("")
    }
  }
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todomsg}
        onChange={(e) => setTodomsg(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Todoform;
