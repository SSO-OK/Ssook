// src/components/Game.tsx
import React, { useState, useEffect } from "react";
import * as S from "./style";
import word1 from "../../data/data1";

interface Card {
  word?: string;
  mean?: string;
}

const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);

const Game: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const cardData = word1.flatMap((item) => [
      { word: item.word },
      { mean: item.mean },
    ]);
    setCards(shuffle(cardData));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    if (isGameOver) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isGameOver]);

  const handleCardClick = (index: number) => {
    if (selectedCards.length < 2 && !selectedCards.includes(index)) {
      setSelectedCards((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      const isMatch =
        (firstCard.word &&
          secondCard.mean &&
          word1.some(
            (item) =>
              item.word === firstCard.word && item.mean === secondCard.mean,
          )) ||
        (firstCard.mean &&
          secondCard.word &&
          word1.some(
            (item) =>
              item.word === secondCard.word && item.mean === firstCard.mean,
          ));

      if (isMatch) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      }

      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards, cards]);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setIsGameOver(true);
    }
  }, [matchedCards, cards]);

  const getMatchedStatus = (index: number) => {
    if (matchedCards.includes(index)) return true;
    if (selectedCards.length === 2 && selectedCards.includes(index)) {
      const [firstIndex, secondIndex] = selectedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      return (
        (firstCard.word &&
          secondCard.mean &&
          word1.some(
            (item) =>
              item.word === firstCard.word && item.mean === secondCard.mean,
          )) ||
        (firstCard.mean &&
          secondCard.word &&
          word1.some(
            (item) =>
              item.word === secondCard.word && item.mean === firstCard.mean,
          ))
      );
    }
    return null;
  };

  return (
    <S.GameContainer>
      <S.TextBox>
        <S.WordTitle>중학교 2학년 필수 영단어</S.WordTitle>
        <S.Timer>{time} s</S.Timer>
      </S.TextBox>
      <S.CardBox>
        {cards.map((card, index) => (
          <S.Card
            key={index}
            onClick={() => handleCardClick(index)}
            clicked={selectedCards.includes(index)}
            matched={getMatchedStatus(index)}
          >
            {card.word || card.mean}
          </S.Card>
        ))}
      </S.CardBox>
      {isGameOver && (
        <S.ModalOverlay>
          <S.ModalContent>
            <div>축하합니다! 모든 카드를 맞추셨습니다.</div>
            <div>걸린 시간: {time} 초</div>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.GameContainer>
  );
};

export default Game;
