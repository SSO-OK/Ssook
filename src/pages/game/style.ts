import styled from "styled-components";

export const GameContainer = styled.div`
  padding-top: 5%;
  padding-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fbfbfb;
`;

export const WordTitle = styled.p`
  font-size: 15px;
  font-family: "GmarketSansMedium";
  margin-bottom: 10px;
  margin-right: 5%;
`;

export const Timer = styled.p`
  font-size: 20px;
  font-family: "GmarketSansMedium";
  margin-bottom: 10px;
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

interface CardProps {
  matched: boolean | null;
  clickable?: boolean;
  clicked?: boolean;
  notMatched?: boolean; // 새로 추가된 prop
}

export const Card = styled.div<CardProps>`
  font-family: "GmarketSansMedium";
  width: 12em;
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ clicked }) => (clicked ? "#d9d9d9" : "white")};
  border: 2px solid
    ${({ matched, notMatched }) =>
      matched ? "#00EF0A" : notMatched ? "red" : "white"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  user-select: none;
  transition: background-color 0.3s, border-color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 18em;
  height: 10em;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 20px;
  font-family: "GmarketSansMedium";
`;

export const Text = styled.text`
  margin-top: 2%;
  font-size: 20px;
  font-family: "GmarketSansMedium";
`;
export const ModalButton = styled.button`
  font-family: "GmarketSansMedium";
  margin-top: 5%;
  font-size: 18px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 2%;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const Time = styled.p`
  margin-top: 20px;
  font-size: 30px;
  font-family: "GmarketSansMedium";
`;
