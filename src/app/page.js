"use client";
import { useState } from "react";
import "./globals.css";
import Task from "@/components/Task";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = (index) => {
    todos.splice(index);
  };
  return (
    <div>
      <div className="todo-container">
        <h1>To-Do list</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <input type="checkbox" name="" id="" />
                <p>{todo}</p>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
