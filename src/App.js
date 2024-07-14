import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fe8c12;
`;

const App = () => {
  return (
    <Container>
      <h1>welcome nonabang</h1>
      <Link to="/signin"><h2>로그인하기</h2></Link>
    </Container>
  );
};

export default App;