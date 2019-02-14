import React from "react";
import "./ActiveQuiz.css";

import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{props.answerNumber}. </strong>
          {props.question}
        </span>
        <small>
          {props.answerNumber} of {props.quizLength}
        </small>
      </p>
      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
      />
    </div>
  );
};

export default ActiveQuiz;
