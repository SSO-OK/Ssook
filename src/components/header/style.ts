import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header_Container = styled.header`
  display: flex;
  width: 100vw;
  height: 7vh;
  padding: 0 16%;
  font-family: "GmarketSansMedium";
`;

export const Header_Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: auto;
`;

export const Header_Logo_Container = styled.div`
  flex: 1;
  height: auto;
  max-height: 100vh;
`;

export const Header_Logo = styled.img`
  display: flex;
`;

export const Header_Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #54575f;
  font-size: 16px;
`;
