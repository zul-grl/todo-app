"use client";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    if (newTodo === "") {
      alert("Please enter a task!");
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  const deleteHandler = (index) => {
    const userConfirmed = confirm("Are you sure you want to delete this task?");
    if (userConfirmed) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    }
  };
  return (
    <div>
      <div className="todo-container">
        <h1>To-Do list</h1>
        <div className="input-section">
          <input
            className="input"
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="add-btn" onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className="filter-buttons">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="todos-list">
          {todos.map((todo, index) => {
            if (todo !== "") {
              return (
                <div key={index} className="todo-item">
                  <input type="checkbox" className="checkbox" />
                  <p>{todo}</p>
                  <button
                    className="delete-btn"
                    onClick={() => deleteHandler(index)}
                  >
                    {" "}
                    Delete
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div></div>
        <div className="pinecone">
          Powered by <a href="https://pinecone.mn/">Pinecone academy</a>
        </div>
      </div>
    </div>
  );
}
