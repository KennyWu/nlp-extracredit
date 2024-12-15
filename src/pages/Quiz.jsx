import Box from "../components/Box.jsx";
import useQuizInfo from "../hooks/getQuiz.jsx";
import { useState } from "react";
import "./quiz.css";

export default function Quiz() {
  const [reset, setReset] = useState(-1);
  const [show, setShow] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [isLoading, candidates, answer, dates] = useQuizInfo(reset);
  console.log(answer);
  const resetQuiz = () => {
    setReset((reset) => -1 * reset);
    setShow(false);
  };

  const updateAnswer = (value) => {
    if (answer == value) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setShow(true);
  };

  return isLoading ? (
    <Box>Loading the Question...</Box>
  ) : (
    <Box>
      <div className="quiz-q-container">
        <div className="question">
          From {dates.from} to {dates.to}, what was the most popular article
          topic?
        </div>
        <div className="quiz-options">
          <ul>
            {candidates.map((ele, idx) => (
              <li onClick={() => updateAnswer(ele[0])} key={idx}>
                {ele[0]}
              </li>
            ))}
          </ul>
        </div>
        <div className="displayResults">
          {show &&
            (correct ? (
              <div className="correct">Correct!</div>
            ) : (
              <div className="wrong">Wrong!</div>
            ))}
          <button onClick={resetQuiz}>Next Question</button>
        </div>
      </div>
    </Box>
  );
}
