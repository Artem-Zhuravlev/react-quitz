import React from "react";
import "./ActiveQuiz.css";

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p>
        <span>
          <strong>1.</strong>
          How are you?
        </span>
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default ActiveQuiz;
