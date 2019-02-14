import React from "react";
import "./AnswersList.css";

import AnswerItem from "../AnswersList/AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    <ul className="AnswersList">
      {props.answers.map((item, index) => (
        <AnswerItem
          answers={item}
          key={index}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[item.id] : null}
        />
      ))}
    </ul>
  );
};

export default AnswersList;
