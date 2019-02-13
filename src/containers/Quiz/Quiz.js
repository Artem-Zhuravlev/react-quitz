import React, { Component } from "react";
import "./Quiz.css";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: []
  };
  render() {
    return (
      <div className="Quiz">
        <h1>Quiz</h1>
        <ActiveQuiz />
      </div>
    );
  }
}

export default Quiz;
