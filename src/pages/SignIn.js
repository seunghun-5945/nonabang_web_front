import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LottieAnimation from "../components/LottieAnimation";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Main from "../components/Main";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

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
`;

const Header = styled.div`
  width: 100%;
  height: 40%;
`;

const Middle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SocialBtn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #fee500;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const LoginArea = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const UnderBar = styled.div`
  width: 40%;
  height: 0px;
  border: 1px solid lightgray;
`;

const SignInContent = () => {
  useEffect(() => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: "KJA8AJCFs2vHONBom5XH",
      callbackUrl: "http://localhost:3000",
      isPopup: false,
      callbackHandle: true,
      loginButton: { color: "green", type: 3, height: 60 }
    });
    naverLogin.init();

    window.addEventListener('load', function () {
      naverLogin.getLoginStatus(function (status) {
        if (status) {
          axios.post('http://localhost:8080/login/oauth2/code/naver', {
            token: naverLogin.accessToken.accessToken
          }).then(response => {
            console.log('Server response:', response.data);
            // 로그인 성공 후의 동작
          }).catch(error => {
            console.error('로그인 실패:', error);
          });
        }
      });
    });
  }, []);

  return (
    <Container>
      <Frame>
        <Header>
          <LottieAnimation/>
        </Header>
        <Middle><h2>로그인하고 <br/> 노나방으로 자취방 찾으러 가볼까요?</h2></Middle>
        <Footer>
          <LoginArea>
            <div id="naverIdLogin"></div>
            <GoogleOAuthProvider clientId="730599288403-73ughe6q8k2us136drgfn2nf10ke5hq2.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                render={renderProps => (
                  <SocialBtn onClick={renderProps.onClick} disabled={renderProps.disabled} style={{backgroundColor: "white"}}>
                    <FcGoogle style={{fontSize: "30px", marginRight: "10px"}}/>구글계정으로 간편 로그인하기
                  </SocialBtn>
                )}
              />
            </GoogleOAuthProvider>
          </LoginArea>
          <LoginArea>
            <span style={{display:"flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center", color: "lightgray"}}><UnderBar/>또는<UnderBar/></span>
            <SocialBtn style={{backgroundColor: "white"}}>노나방 로그인하기</SocialBtn>
            <span style={{width: "70%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}><h4>아직 회원이 아니신가요?</h4>
              <Link to="/SignUp"><h4 style={{color: "lightsalmon", cursor: "pointer"}}>회원 가입</h4></Link>
            </span>
          </LoginArea>
        </Footer>
      </Frame>
    </Container>
  );
}

const SignIn = () => {
  return <Main props={<SignInContent />} />;
};

export default SignIn;