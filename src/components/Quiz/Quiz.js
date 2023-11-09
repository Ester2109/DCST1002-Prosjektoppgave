import styles from "./Quiz.module.css";
import Paragraph from "../Paragraph";
import Answer from "../Answer/Answer";
import hashCode from "../../utils/hashCode";
import { useState } from "react";

const Quiz = ({ question, answers, ...props }) => {
  const [answerState, setAnswerState] = useState(0);

  // Generate a hash from the question
  const hash = hashCode(question);

  const correctCallback = () => {
    setAnswerState(1);
  };

  const incorrectCallback = () => {
    setAnswerState(2);
  };

  return (
    <div className={styles.quiz} {...props}>
      <i className={styles.questionMark}>&#63;</i>
      <Paragraph
        style={{
          fontWeight: "bold",
        }}
      >
        {question}
      </Paragraph>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: ".5rem",
        }}
      >
        {answers?.map((answer) => (
          <Answer
            name={hash.toString()}
            onClick={answer?.correct ? correctCallback : incorrectCallback}
          >
            {answer.label}
          </Answer>
        ))}
        <div
          style={{
            marginTop: "1rem",
            width: "100%",
          }}
        >
          {answerState == 1 ? <Feedback state={1} /> : undefined}
          {answerState == 2 ? <Feedback state={2} /> : undefined}
        </div>
      </div>
    </div>
  );
};

const Feedback = ({ state }) => {
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        borderRadius: ".5rem",
        padding: ".5rem",
        backgroundColor: state == 1 ? "rgb(100,255,100)" : "rgb(255,100,100)",
        color: state == 1 ? "black" : "white",
      }}
    >
      {state == 1 ? "Det er riktig!" : undefined}
      {state == 2 ? "Det er feil!" : undefined}
    </div>
  );
};

export default Quiz;
