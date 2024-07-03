import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const WordTitle = styled.p`
  font-size: 15px;
  font-family: "GmarketSansMedium";
`;

export const Timer = styled.p`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`;
export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
`;

interface CardProps {
  matched: boolean | null;
  clickable?: boolean;
}

export const Card = styled.div<CardProps>`
  font-family: "GmarketSansMedium";
  width: 120%;
  height: 7em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid ${({ matched }) => (matched === true ? "green" : "white")};
  box-shadow: 1px 1px 1px 1px gray;
  border-radius: 5px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
`;
