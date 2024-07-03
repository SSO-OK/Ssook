import React, { useState, useMemo } from "react";
import * as S from "./style";

const Home: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("고등");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  // 버튼 컴포넌트를 memoization하여 최적화
  const MemoButton = useMemo(
    () =>
      ({ children, name }: { children: React.ReactNode; name: string }) =>
        (
          <S.HomeButton
            selected={selectedButton === name}
            onClick={() => handleButtonClick(name)}
          >
            {children}
          </S.HomeButton>
        ),
    [selectedButton]
  );

  const boxes = [
    { title: "수능 특강 영단어 1800", tag: "1800단어", date: "2024.03.01" },
    { title: "수능 특강 영단어 1800", tag: "1800단어", date: "2024.03.01" },
    { title: "수능 특강 영단어 1800", tag: "1800단어", date: "2024.03.01" },
  ];

  return (
    <S.HomeContainer>
      <S.HomeTitle>추천 단어 세트 모음 🎢</S.HomeTitle>
      <S.HomeButtonContainer>
        <MemoButton name="고등">고등</MemoButton>
        <MemoButton name="중등">중등</MemoButton>
        <MemoButton name="기초">기초</MemoButton>
      </S.HomeButtonContainer>
      <S.BoxContainer>
        {boxes.map((box, index) => (
          <S.Box key={index}>
            <div className="box-title">{box.title}</div>
            <div className="box-tag">{box.tag}</div>
            <div className="box-date">{box.date}</div>
          </S.Box>
        ))}
      </S.BoxContainer>
      <S.HomeTitle>최근 추가된 단어 세트 모음 ⚡️</S.HomeTitle>
      <S.BoxContainer>
        {boxes.map((box, index) => (
          <S.Box key={index}>
            <div className="box-title">{box.title}</div>
            <div className="box-tag">{box.tag}</div>
            <div className="box-date">{box.date}</div>
          </S.Box>
        ))}
      </S.BoxContainer>
      <S.StyledLink to="/Library">라이브러리 바로가기 </S.StyledLink>
    </S.HomeContainer>
  );
};

export default Home;
