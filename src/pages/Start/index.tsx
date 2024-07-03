import * as S from "./style";
import Logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";

const Start = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setStart(true);
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    if (start) {
      window.location.href = "/Home";
    }
  }, [start]);

  return (
    <S.Main_Container>
      <S.Main_Layout_container>
        <S.Main_Logo_Container>
          <S.Main_Logo src={Logo} alt="Logo" />
        </S.Main_Logo_Container>
        <S.Main_Title>어려운 단어도 단번에</S.Main_Title>
      </S.Main_Layout_container>
    </S.Main_Container>
  );
};

export default Start;


