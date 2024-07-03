import * as S from "./style";
import Logo2 from "../../assets/Logo2.svg";

const Header = () => {
  return (
    <S.Header_Container>
      <S.Header_Layout>
        <S.Header_Logo_Container>
          <S.Header_Logo src={Logo2} alt="Logo2" />
        </S.Header_Logo_Container>
        <S.Header_Nav>
          <S.StyledLink to="/Home">홈</S.StyledLink>
          <S.StyledLink to="/Library">라이브러리</S.StyledLink>
        </S.Header_Nav>
      </S.Header_Layout>
    </S.Header_Container>
  );
};

export default Header;
