import React from "react";
import "./FinishedQuiz.css";

const FinishedQuiz = () => {
  return (
    <div className="FinishedQuiz">
      <ul>
        <li>
          <strong>1. How are you?</strong>
          <i className="fa fa-times error" />
        </li>
        <li>
          <strong>1. How are you?</strong>
          <i className="fa fa-check success" />
        </li>
      </ul>
      <p>Right 4 of 10</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
