import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const Frame = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MenuFrame = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

const MenuSection = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 60px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
`;

const LoginFrame = styled.button`
  width: 230px;
  height: 50px;
  border: solid 2px #dfdfdf;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
  &:hover {
    background-color: #fcfcfc;
  }

  span {
    background-color: rgb(223, 223, 223);
    height: 16px;
    width: 1px;
    margin: 5px 8px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Frame>
        <Logo>
          <a href="/">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </Logo>
        <MenuFrame>
          <MenuSection>
            <ul>
              <li>
                <a href="#">매물찾기</a>
              </li>
              <li>
                <a href="#">매물등록</a>
              </li>
              <li>
                <a href="#">나의매물</a>
              </li>
              <li>
                <a href="#">매물 추천받기</a>
              </li>
            </ul>
          </MenuSection>
        </MenuFrame>
        <LoginFrame>
          <a href="SignIn">
            로그인 <span></span> 회원가입
          </a>
        </LoginFrame>
      </Frame>
    </Container>
  );
};

export default Header;
