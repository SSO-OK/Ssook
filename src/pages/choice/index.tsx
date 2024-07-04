// src/components/Choice.tsx
import React, { useState, useEffect } from "react";
import * as S from "./style";
import word1 from "../../data/data1";

const Choice: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<{
    word: string;
    mean: string;
  } | null>(null);

  useEffect(() => {
    setCurrentWord(word1[Math.floor(Math.random() * word1.length)]);
  }, []);

  if (!currentWord) {
    return <S.ChoiceContainer>Loading...</S.ChoiceContainer>;
  }

  return (
    <S.ChoiceContainer>
      <S.WordBox>
        <S.Word>{currentWord.word}</S.Word>
        <S.ChoiceBox>
          <S.Choice>{currentWord.mean}</S.Choice>
        </S.ChoiceBox>
      </S.WordBox>
    </S.ChoiceContainer>
  );
};

export default Choice;
