import { Link } from "react-router-dom";
import Box from "../components/Box.jsx";
import "./home.css";

export default function Home() {
  return (
    <Box>
      <div className="quiz-container">
        <Link to={"/quiz"}>Start Quiz</Link>
      </div>
    </Box>
  );
}
