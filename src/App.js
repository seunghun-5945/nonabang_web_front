import React from "react";
import styled from "styled-components";
import SignIn from "./components/SignIn";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fe8c12;
`;

const App = () => {
  return (
    <Container>
      <SignIn/>
    </Container>
  );
};

export default App;