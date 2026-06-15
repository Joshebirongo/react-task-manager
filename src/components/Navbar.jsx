import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>

      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>

      <Link to="/tasks" className="nav-link">
        Tasks
      </Link>

      <Link to="/tasks/menu" className="nav-link">
        Tasks Menu
      </Link>

      <Link to="/tasks/new" className="nav-link">
        Create Task
      </Link>

      <Link to="/notifications" className="nav-link">
        Notifications
      </Link>

      <Link to="/activities" className="nav-link">
        Activities
      </Link>

      <Link to="/profile" className="nav-link">
        Profile
      </Link>

      <Link to="/team" className="nav-link">
        Team
      </Link>

      <Link to="/settings" className="nav-link">
        Settings
      </Link>

      <Link to="/reports" className="nav-link">
        Reports
      </Link>

      <Link to="/about" className="nav-link">
        About
      </Link>

      <Link to="/help" className="nav-link">
        Help
      </Link>
    </nav>
  );
}
