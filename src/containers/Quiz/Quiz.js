import React, { Component } from "react";
import "./Quiz.css";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "What color are my eyes?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Gray", id: 1 },
          { text: "Blue", id: 2 },
          { text: "Light blue", id: 3 },
          { text: "Dark", id: 4 },
          { text: "Green", id: 5 }
        ]
      },
      {
        question: "In which year was founded St. Petersburg",
        rightAnswerId: 4,
        id: 2,
        answers: [
          { text: "1701", id: 1 },
          { text: "1805", id: 2 },
          { text: "1990", id: 3 },
          { text: "1703", id: 4 },
          { text: "1622", id: 5 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {
          [answerId]: "success"
        }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: {
          [answerId]: "error"
        }
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>

          {this.state.isFinished ? (
            <FinishedQuiz />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
