import Box from "../components/Box.jsx";
import useQuizInfo from "../hooks/getQuiz.jsx";
import { useState } from "react";
import "./quiz.css";

export default function Quiz() {
  const [reset, setReset] = useState(-1);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isLoading, candidates, answer, dates] = useQuizInfo(reset);
  // console.log(answer);
  const resetQuiz = () => {
    setReset((reset) => -1 * reset);
    setShow(false);
  };

  const updateAnswer = (value) => {
    if (answer == value) {
      setSelected(value);
    } else {
      setSelected(value);
    }
    setShow(true);
  };

  const getCandidateClass = (ele) => {
    if (!show) {
      return "";
    }
    if (selected == ele[0]) {
      return answer == ele[0] ? "correct-opt" : "wrong-opt";
    } else if (answer == ele[0]) {
      return "correct-opt";
    }
    return "";
  }

  const correct = selected == answer;

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
              <li onClick={() => updateAnswer(ele[0])}
                key={idx}
                className={getCandidateClass(ele)}>
                {ele[0]}
              </li>
            ))}
          </ul>
        </div>
        <div className="displayResults">
          {show &&
            (correct ? (
              <div className="correct-msg">Correct!</div>
            ) : (
              <div className="wrong-msg">Wrong!</div>
            ))}
          <button onClick={resetQuiz}>Next Question</button>
        </div>
      </div>
    </Box>
  );
}
