import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 0 16%;

  @media (max-width: 768px) {
    padding: 0 8%;
  }

  @media (max-width: 480px) {
    padding: 0 4%;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 7%;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 10%;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 12%;
  }
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 22px;
  align-items: flex-start;
  margin-bottom: 27px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

interface ButtonProps {
  selected: boolean;
}

export const HomeButton = styled.button<ButtonProps>`
  display: flex;
  background-color: ${(props) => (props.selected ? "#0094ff" : "transparent")};
  border: 1px solid #0094ff;
  border-radius: 30px;
  padding: 8px 16px;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#ffffff" : "#0094ff")};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Box = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: calc(33.9% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 170px;

  &:hover {
    border-left: 5px solid #0094ff;
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const BoxTitle = styled.div`
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const BoxTag = styled.div`
  display: inline-block;
  background-color: #0094ff;
  color: #ffffff;
  border-radius: 30px;
  padding: 5px;
  font-size: 10px;
  max-width: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 8px;
  }

  @media (max-width: 480px) {
    font-size: 6px;
  }
`;

export const BoxDate = styled.div`
  font-size: 12px;
  color: #96979c;
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

export const LibraryLink = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: #7a7d85;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: 15px;
  color: #7a7d85;
  text-decoration: none;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
