import * as S from "./style";
import { useNavigate } from "react-router-dom";
import flashcard from "../../assets/flash.svg";
import multipleChoiceImage from "../../assets/four.svg";
import write from "../../assets/write.svg";
import matching from "../../assets/matching.svg";

const Click = () => {
  const navigate = useNavigate();

  const boxes = [
    {
      title: "플래시카드",
      tag: "단어카드를",
      tag2: "좌우로 스와이프하세요",
      image: flashcard,
      path: "/flashcard",
    },
    {
      title: "사지선다",
      tag: "문제를 읽고",
      tag2: "정답을 선택하세요",
      image: multipleChoiceImage,
      path: "/multiple-choice",
    },
    {
      title: "받아쓰기",
      tag: "단어의 철자를",
      tag2: "입력하세요",
      image: write,
      path: "/dictation",
    },
    {
      title: "단어 짝 맞추기",
      tag: "의미가 같은",
      tag2: "단어끼리 짝을 맞추세요",
      image: matching,
      path: "/matching",
    },
  ];

  const handleBoxClick = (path: any) => {
    navigate(path);
  };

  return (
    <S.Click_Container>
      <S.Click_Title>학습</S.Click_Title>
      <S.ContentContainer>
        <S.BoxContainer>
          {boxes.map((box, index) => (
            <S.Box key={index} onClick={() => handleBoxClick(box.path)}>
              <S.BoxImage src={box.image} alt={box.title} />
              <S.BoxContent>
                <S.BoxTitle>{box.title}</S.BoxTitle>
                <S.BoxTags>
                  <S.BoxTag>{box.tag}</S.BoxTag>
                  <S.BoxTag2>{box.tag2}</S.BoxTag2>
                </S.BoxTags>
              </S.BoxContent>
            </S.Box>
          ))}
        </S.BoxContainer>
        <S.SideSection>
          <S.SideItem>
            <S.SideLabel>학습할 단어</S.SideLabel>
            <S.SideLink to="/all-words">모든 단어 &gt;</S.SideLink>
          </S.SideItem>
          <S.SideItem>
            <S.SideLabel>문제 유형</S.SideLabel>
            <S.SideLink to="/random">무작위 &gt;</S.SideLink>
          </S.SideItem>
        </S.SideSection>
      </S.ContentContainer>
    </S.Click_Container>
  );
};

export default Click;
