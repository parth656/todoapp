// pages/index.js
import { useState } from "react";
import Todo from "../components/Todo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [emojis] = useState(["😀", "😆", "😊", "😍", "🤩", "🥳"]);

  const handleAddTodo = () => {
    if (newTodo.trim().length === 0) return;

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const currentDate = new Date();

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        emoji: randomEmoji,
        dateAdded: currentDate.toISOString(),
      },
    ]);

    setNewTodo("");
  };

  const handleCompleteTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setCompletedTodos([...completedTodos, { ...todo, completed: true }]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteTodo = (id, isCompleted) => {
    if (isCompleted) {
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="todos-container">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onComplete={() => handleCompleteTodo(todo.id)} onDelete={() => handleDeleteTodo(todo.id, false)} />
        ))}
      </div>
      {completedTodos.length > 0 && (
        <div className="completed-todos-container">
          <h2>Completed Todos</h2>
          <div className="completed-todos">
            {completedTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} onDelete={() => handleDeleteTodo(todo.id, true)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
