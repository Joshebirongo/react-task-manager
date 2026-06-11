import { useState } from "react";

export default function TaskForm() {
  const [title, SetTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    SetTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Task title"
        onChange={(event) => SetTitle(event.target.value)}
      />

      <button type="submit">Create Task</button>
    </form>
  );
}
