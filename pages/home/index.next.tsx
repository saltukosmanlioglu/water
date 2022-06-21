import React from "react";
import type { NextPage } from "next";

import Questionnaire from "@/widgets/questionnaire";

import { questions } from "./constant";
import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Styled.Nav>
        <p>sa</p>
        <p>as</p>
      </Styled.Nav>
      <Styled.Gutter>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          omnis aspernatur laudantium, sequi officia reiciendis. Eveniet ratione
          praesentium, consequuntur, esse a neque maiores vitae adipisci quas
          officiis enim placeat tempore. Tempora, labore. Iste dolore voluptatum
          culpa. Dolorum aspernatur, repellat excepturi aliquid optio ad
          temporibus nisi. Molestiae, aspernatur laudantium laboriosam quia
        </p>
        {questions.map((question, index) => (
          <Questionnaire
            key={index}
            options={question.options}
            question={`${index + 1}. ${question.question}`}
          />
        ))}
        <Styled.ShareButton>PAYLAŞ</Styled.ShareButton>
      </Styled.Gutter>
    </React.Fragment>
  );
};

export default Home;
