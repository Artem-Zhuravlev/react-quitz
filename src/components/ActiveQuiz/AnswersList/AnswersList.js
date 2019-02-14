import React from "react";
import "./AnswersList.css";

import AnswerItem from "../AnswersList/AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    <ul className="AnswersList">
      {props.answers.map((item, index) => (
        <AnswerItem answers={item} key={index} />
      ))}
    </ul>
  );
};

export default AnswersList;
