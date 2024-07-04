import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
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
}

export const Card = styled.div<CardProps>`
  font-family: "GmarketSansMedium";
  width: 12em;
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid ${({ matched }) => (matched === true ? "green" : "white")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  user-select: none;
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
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 20px;
  font-family: "GmarketSansMedium";
  max-width: 80%;
`;

export const ModalMessage = styled.p`
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  font-family: "GmarketSansMedium";
  font-size: 18px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
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
