import tasks from "../data/tasks";
import SearchBar from "../components/SearchBar";
import TasksList from "../components/TasksList";

export default function TasksMenu() {
  return (
    <div>
      <h1>Tasks</h1>

      <SearchBar />

      <TasksList tasks={tasks} />
    </div>
  );
}
