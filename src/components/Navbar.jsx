import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <br />
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <br />
      <Link to="/tasks" className="nav-link">
        Tasks
      </Link>
      <br />
      <Link to="/tasks/menu" className="nav-link">
        Tasks Menu
      </Link>
      <br />
      <Link to="/tasks/new" className="nav-link">
        Create Task
      </Link>
      <br />
      <Link to="/notifications" className="nav-link">
        Notifications
      </Link>
      <br />
      <Link to="/activities" className="nav-link">
        Activities
      </Link>
      <br />
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
      <br />
      <Link to="/team" className="nav-link">
        Team
      </Link>
      <br />
      <Link to="/settings" className="nav-link">
        Settings
      </Link>
      <br />
      <Link to="/reports" className="nav-link">
        Reports
      </Link>
      <br />
      <Link to="/about" className="nav-link">
        About
      </Link>
      <br />
      <Link to="/help" className="nav-link">
        Help
      </Link>
    </nav>
  );
}
