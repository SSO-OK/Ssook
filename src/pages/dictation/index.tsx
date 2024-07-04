import React, { useState } from "react";
import * as S from "./style";
import word1 from "../../data/data1";

const dictation = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [words, setWords] = useState(word1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === words[currentWordIndex].mean) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (isCorrect === false) {
      setWords((prevWords) => [
        ...prevWords.slice(0, currentWordIndex),
        ...prevWords.slice(currentWordIndex + 1),
        prevWords[currentWordIndex],
      ]);
    }
    setInputValue("");
    setIsCorrect(null);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>워드마스터 수능 2000</S.Title>
        <S.Progress>{currentWordIndex + 1} / 2000</S.Progress>
      </S.Header>
      <S.WordCard isCorrect={isCorrect}>
        <S.Word>{words[currentWordIndex].word}</S.Word>
        <S.InputContainer>
          <S.Input
            value={inputValue}
            onChange={handleChange}
            placeholder="단어의 의미를 입력하세요"
            isCorrect={isCorrect}
          />
          <S.Button
            onClick={isCorrect === null ? handleSubmit : handleNext}
            isCorrect={isCorrect}
          >
            {isCorrect === null
              ? "확인"
              : isCorrect
              ? "다음 단어로"
              : "나중에 한 번 더"}
          </S.Button>
        </S.InputContainer>
        {isCorrect !== null && (
          <S.Answer isCorrect={isCorrect}>
            {words[currentWordIndex].mean}
          </S.Answer>
        )}
      </S.WordCard>
      <S.SkipHint>잘 모르겠다면 넘어갈까요?</S.SkipHint>
    </S.Container>
  );
};

export default dictation;
