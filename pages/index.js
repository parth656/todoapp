import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const emojis = ["??", "??", "??", "??", "??", "??"];

  const handleAddTodo = () => {
    if (newTodo.trim().length === 0) return;

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setTodos([...todos, { id: Date.now(), text: newTodo, emoji: randomEmoji }]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
  };

 
const handleCompleteTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  setCompletedTodos([...completedTodos, { ...todo, completed: true }]);
  setTodos(todos.filter((todo) => todo.id !== id));
};

  const handleRemoveCompletedTodos = () => {
    setCompletedTodos([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              onChange={() => handleCompleteTodo(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.emoji} {todo.text}</label>
            <button onClick={() => handleDeleteTodo(todo.id)}>?</button>
          </li>
        ))}
      </ul>
      <div className="completed-todos">
        <h2>Completed Todos</h2>
        {completedTodos.length > 0 ? (
          <ul>
            {completedTodos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  id={`completed-${todo.id}`}
                  checked
                  disabled
                />
                <label htmlFor={`completed-${todo.id}`} className="completed">
                  {todo.emoji} {todo.text}
                </label>
                <button onClick={() => handleDeleteTodo(todo.id)}>?</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed todos yet.</p>
        )}
        {completedTodos.length > 0 && (
          <button onClick={handleRemoveCompletedTodos}>Clear Completed</button>
        )}
      </div>
    </div>
  );
}
