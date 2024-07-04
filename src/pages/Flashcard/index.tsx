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
      setShowModal(true);
    }
  };

  const handleDontKnow = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowWord(false); // Reset to hide word for the next meaning
    } else {
      setShowModal(true);
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
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalHeader>학습 완료</S.ModalHeader>
            <S.ModalBody>단어 학습을 완료하였습니다!</S.ModalBody>
            <S.ModalFooter>
              <S.ModalButton onClick={() => navigate("/Home")}>
                홈으로
              </S.ModalButton>
            </S.ModalFooter>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default Flashcard;
