import React, { useState } from "react";

import { QuestionnaireProps } from "./types";
import * as Styled from "./Questionnaire.styled";

const Questionnaire: React.FunctionComponent<QuestionnaireProps> = ({
  question,
  options,
}) => {
  const [activeChoose, setActiveChoose] = useState<number>();

  return (
    <Styled.Questionnaire>
      <b>{question}</b>
      <Styled.Gutter>
        {options.map((option, index) => (
          <button key={index} onClick={() => setActiveChoose(index)}>
            <div>{activeChoose === index ? <div /> : null}</div>
            <p>{option.text}</p>
          </button>
        ))}
      </Styled.Gutter>
    </Styled.Questionnaire>
  );
};

export default Questionnaire;
