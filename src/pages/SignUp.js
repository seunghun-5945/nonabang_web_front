import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Main from "../components/Main";

const SampleLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: salmon;
`;

const Container = styled.div`
  width: 500px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid lightgray;
`;

const Frame = styled.div`
  width: 80%;
  height: 90%;
  border: 1px solid black;
`;

const SignUpContent = () => {
  const [modalState, setModalState] = useState(true);

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Container>
        {modalState && <Modal closeModal={closeModal} />}
      <Frame></Frame>
    </Container>
  );
};

const SignUp = () => {
  return <Main props={<SignUpContent />} />;
};

export default SignUp;
