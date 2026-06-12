import { Routes, Route } from "react-router-dom";

// Import the components
import Navbar from "./components/Navbar";
// Import the pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TasksMenu from "./pages/TasksMenu";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import Activity from "./pages/Acivity";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Notifcations from "./pages/Notifications";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/tasks/Menu" element={<TasksMenu />} />

        <Route path="/tasks/:id" element={<TaskDetails />} />

        <Route path="/tasks/new" element={<CreateTask />} />

        <Route path="/notifications" element={<Notifcations />} />

        <Route path="/activities" element={<Activity />} />

        <Route path="/team" element={<Team />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
