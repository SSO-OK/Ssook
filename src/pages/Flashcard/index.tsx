import React, { useState } from "react";
import * as S from "./style";
import words from "../../data/data1";
import { useNavigate } from "react-router-dom";

const Flashcard: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const totalWords = words.length;

  const handleKnow = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowWord(false); // Reset to hide word for the next meaning
    } else {
      setShowModal(true); // Show completion modal
    }
  };

  const handleDontKnow = () => {
    if (currentIndex < totalWords - 1) {
      const updatedWords = [...words];
      const currentWord = updatedWords.splice(currentIndex, 1)[0];
      updatedWords.push(currentWord);
      setCurrentIndex(currentIndex + 1); // Move to the next word
      setShowWord(false); // Reset to hide word for the next meaning
    } else {
      setShowModal(true); // Show completion modal
    }
  };

  const toggleWord = () => {
    setShowWord(!showWord);
  };


  return (
    <S.Container>
      <S.Header>워드마스터 수능 2000</S.Header>
      <S.FlashcardBox onClick={toggleWord}>
        {showWord ? (
          <S.Word>{words[currentIndex].mean}</S.Word>
        ) : (
          <S.Meaning>{words[currentIndex].word}</S.Meaning>
        )}
        <S.Progress>
          {currentIndex + 1} / {totalWords}
        </S.Progress>
      </S.FlashcardBox>
      <S.Buttons>
        <S.Button onClick={handleDontKnow}>몰라요</S.Button>
        <S.Button onClick={handleKnow}>알아요</S.Button>
      </S.Buttons>
      {showModal && (
        <S.ModalContainer>
          <S.ModalContent>
            <S.ModalMessage>암기를 완료하였습니다!</S.ModalMessage>
            <S.HomeButton onClick={() => navigate("/Home")}>
              홈으로 가기
            </S.HomeButton>
          </S.ModalContent>
        </S.ModalContainer>
      )}
    </S.Container>
  );
};

export default Flashcard;
