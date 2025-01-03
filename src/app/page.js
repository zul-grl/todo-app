"use client";
import { useState } from "react";
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = () => {
    if (newTodo === "") {
      alert("Please enter a task!");
      return;
    }
    setTodos([...todos, { todo: newTodo, isCompleted: false }]);
    setNewTodo("");
  };
  const deleteHandler = (index) => {
    const userConfirmed = confirm("Are you sure you want to delete this task?");
    if (userConfirmed) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  };
  // const toggleIsCompleted = (index) => {
  //   const updatedTodos = filteredTodos.map((t, i) =>
  //     i === index ? { ...t, isCompleted: !t.isCompleted } : t
  //   );
  //   setTodos(updatedTodos);
  // };
  const toggleIsCompleted = (index) => {
    const updatedTodos = todos.map((t, i) =>
      i === todos.findIndex((todo) => todo === filteredTodos[index])
        ? { ...t, isCompleted: !t.isCompleted }
        : t
    );
    setTodos(updatedTodos);
  };
  const clearCompletedHandler = () => {
    const userConfirmed = confirm(
      "Are you sure you want to clear all completed tasks?"
    );
    if (userConfirmed) {
      const updatedTodos = todos.filter((todo) => !todo.isCompleted);
      setTodos(updatedTodos);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "completed") {
      return todo.isCompleted;
    } else if (activeFilter === "active") {
      return !todo.isCompleted;
    }
    return true;
  });
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

        <div className={`${styles.flex} ${styles.filterButtons}`}>
          <button
            id="1"
            className={activeFilter == "all" && styles.activeStyle}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            id="2"
            className={activeFilter == "active" && styles.activeStyle}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </button>
          <button
            id="3"
            className={activeFilter == "completed" && styles.activeStyle}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div className="todos-list">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo, index) => (
              <div key={index} className="todo-item">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => toggleIsCompleted(index)}
                />
                <p>{todo.todo}</p>
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="task">No tasks found!</p>
          )}
        </div>

        {todos.length > 0 && (
          <div className="completed">
            <p>
              {todos.filter((t) => t.isCompleted).length} of {todos.length}{" "}
              tasks completed
            </p>
            <button className="clear-btn" onClick={clearCompletedHandler}>
              Clear Completed
            </button>
          </div>
        )}

        <div className="pinecone">
          Powered by <a href="https://pinecone.mn/">Pinecone Academy</a>
        </div>
      </div>
    </div>
  );
}
