import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 0 16%;
`;

export const Title = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 7%;
`;

export const FlashcardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  padding: 40px 60px;
  margin-bottom: 30px;
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Word = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Progress = styled.span`
  font-size: 16px;
  color: #888;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &:nth-child(1) {
    background-color: #e0e0e0;
  }

  &:nth-child(2) {
    background-color: #4caf50;
    color: white;
  }
`;

export const Instruction = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 10px;
`;
