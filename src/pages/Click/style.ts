import { Link } from "react-router-dom";
import styled from "styled-components";

export const Click_Container = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 0 16%;
`;

export const Click_Title = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 5%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 45vw;
  height: 60vh;
`;

export const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  &:hover {
    border-left: 5px solid #0094ff; /* 호버 시 파란색 세로 선 */
  }
`;

export const BoxImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 40px;
`;

export const BoxContent = styled.div``;

export const BoxTitle = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const BoxTags = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxTag = styled.div`
  color: #414348;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const BoxTag2 = styled.div`
  color: #414348;
  font-size: 16px;
`;

export const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
`;

export const SideItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SideLabel = styled.div`
  font-size: 16px;
  color: #000;
`;

export const SideLink = styled(Link)`
  font-size: 16px;
  color: #7a7d85;
  text-decoration: none;
`;
