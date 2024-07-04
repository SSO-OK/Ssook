import { useState } from "react";
import * as S from "./style";

const Library = () => {
  const [seButton, setSeButton] = useState<string>("고등");

  const ButtonClick = (buttonName: string) => {
    setSeButton(buttonName);
  };

  const buttons = ["고등", "중등", "기초"];
  const boxes = [
    { title: "수능 특강 영단어 1800", tag: "1800단어", date: "2024.03.01" },
    { title: "수능 특강 영단어 1800", tag: "1800단어", date: "2024.03.01" },
    { title: "수능 특강 영단어 1800", tag: "1800단어", date: "2024.03.01" },
  ];

  return (
    <S.HomeContainer>
      <S.HomeTitle>학습 중인 내 클래스</S.HomeTitle>
      <S.BoxContainer>
        {boxes.map((box, index) => (
          <S.Box key={index}>
            <S.BoxTitle>{box.title}</S.BoxTitle>
            <S.BoxTag>{box.tag}</S.BoxTag>
            <S.BoxDate>{box.date}</S.BoxDate>
          </S.Box>
        ))}
      </S.BoxContainer>
      <S.HomeTitle>추천 단어 세트 모음 🎢</S.HomeTitle>
      <S.HomeButtonContainer>
        {buttons.map((name) => (
          <S.HomeButton
            key={name}
            selected={seButton === name}
            onClick={() => ButtonClick(name)}
          >
            {name}
          </S.HomeButton>
        ))}
      </S.HomeButtonContainer>
      <S.BoxContainer>
        {boxes.map((box, index) => (
          <S.Box key={index}>
            <S.BoxTitle>{box.title}</S.BoxTitle>
            <S.BoxTag>{box.tag}</S.BoxTag>
            <S.BoxDate>{box.date}</S.BoxDate>
          </S.Box>
        ))}
      </S.BoxContainer>
    </S.HomeContainer>
  );
};

export default Library;
