import styled from "styled-components";

export const Questionnaire = styled.div`
  border: 0.1px solid #000;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
`;

export const Gutter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px 0;
  align-items: flex-start;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      border: 0.1px solid #000;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      padding: 2px;

      div {
        background-color: #000;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }

    p {
      margin-left: 12px;
    }
  }
`;
