import React, { useState } from "react";
import * as S from "./style";

const Flashcard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = ["golden"]; // Array of words
  const totalWords = words.length;

  const handleKnow = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDontKnow = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <S.Container>
      <S.Title>학습 중인 내 클래스</S.Title>
      <S.FlashcardBox>
        <S.Word>{words[currentIndex]}</S.Word>
        <S.Progress>
          {currentIndex + 1} / {totalWords}
        </S.Progress>
      </S.FlashcardBox>
      <S.Buttons>
        <S.Button onClick={handleDontKnow}>몰라요</S.Button>
        <S.Button onClick={handleKnow}>알아요</S.Button>
      </S.Buttons>
      <S.Instruction>방향키를 눌러 조절</S.Instruction>
    </S.Container>
  );
};

export default Flashcard;
