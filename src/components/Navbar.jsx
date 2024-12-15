import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar({}) {
  return (
    <div className="container">
      <div className="navbar">
        <h1>WikiTopics Quiz</h1>
        <nav>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
          <NavLink to="quiz">
            <h2>Take Quiz</h2>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
