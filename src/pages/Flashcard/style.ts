// style.ts 파일 내용

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 50px 16%; /* 상하 여백을 더 내려줍니다. */
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: left; /* 타이틀을 왼쪽 정렬합니다. */
  margin-left: 16%; /* 왼쪽 여백을 맞춰서 타이틀이 카드 박스와 일치하도록 설정 */
`;

export const FlashcardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 200px; /* 상하 여백을 조정합니다. */
  margin-bottom: 30px;
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  height: 80%; /* 박스의 세로 길이를 조정합니다. */
`;

export const Word = styled.span`
  font-size: 72px; /* 영어 단어의 폰트 크기를 키웁니다. */
  text-align: center; /* 텍스트를 가운데 정렬합니다. */
  color: #000000;
  margin-top: auto; /* 영어 단어와 뜻 사이의 여백을 추가합니다. */
`;

export const Meaning = styled.span`
  font-size: 72px; /* 뜻의 폰트 크기를 키웁니다. */
  text-align: center; /* 텍스트를 가운데 정렬합니다. */
  color: #000000;
  margin-top: auto; /* 뜻을 아래쪽으로 내립니다. */
`;

export const Progress = styled.span`
  font-size: 20px;
  color: #96979c;
  text-align: center; /* 페이지 수를 가운데 정렬합니다. */
  margin-top: auto; /* 페이지 수를 아래쪽으로 내립니다. */
`;

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px; /* 버튼을 좀 더 아래로 내립니다. */
  justify-content: center; /* 중앙 정렬 추가 */
`;

export const Button = styled.button`
  padding: 20px 40px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid #0094ff; /* 외곽선 스토크 추가 */
  border-radius: 30px; /* 동그랗게 변경 */
  transition: background-color 0.3s;
  font-weight: bold;
  margin-top: 5%;

  &:hover {
    background-color: #0094ff;
    color: #fff; /* 호버시 글자색 흰색으로 변경 */
  }

  &:nth-child(1) {
    background-color: #fff;
    color: #0094ff; /* 글자 색을 파란색으로 설정합니다. */
  }

  &:nth-child(2) {
    background-color: #0094ff; /* 배경색을 파란색으로 설정합니다. */
    color: #fff; /* 글자 색을 흰색으로 설정합니다. */
  }
`;

export const Instruction = styled.p`
  font-size: 16px;
  color: #888;
  margin-top: 10px;
`;
