import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(""); // ["task1", "task2"
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, task]);
    setTask("");
  }

  function removeTodo(todo) {
    setTodos(todos.filter((t) => t !== todo));
    console.log(todos);
  }

  function checkForEnter(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div>
      <h1 className="heading">Super Todo App</h1>
      <div className="input-area">
        <input
          className="input"
          onKeyDown={checkForEnter}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button className="submit" type="submit" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li className="todo">
            {todo}
            <button className="cross-button" onClick={() => removeTodo(todo)}>
              <span className="cross-icon">❌</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
