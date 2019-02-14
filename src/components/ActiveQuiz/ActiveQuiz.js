import React from "react";
import "./ActiveQuiz.css";

import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>1. </strong>
          How are you?
        </span>
        <small>4 of 12</small>
      </p>
      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
