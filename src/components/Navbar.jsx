import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar({}) {
  return (
    <div className="container">
      <div className="navbar">
        <h1>WikiTopics Quiz</h1>
        <nav>
          <NavLink to="/">
            <h2>Quiz</h2>
          </NavLink>
          <NavLink to="https://github.com/WikiTopics/wikitopics-code">
            <h2>Source Code</h2>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
