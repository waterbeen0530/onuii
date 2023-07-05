import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Main() {
  return (
    <Container>
      <Logo src="./imgs/login/logo.png" />
      <InputBox>
        <Input placeholder="아이디를 입력해주세요." />
        <Input placeholder="비밀번호를 입력해주세요." />
      </InputBox>
      <Link href="/main">
        <Button>로그인</Button>
      </Link>
      <OauthBox>
        <Text>간편 계정 연결</Text>
        <Oauths>
          <Oauth src="./imgs/login/naver.png" />
          <Oauth src="./imgs/login/google.png" />
          <Oauth src="./imgs/login/kakao.png" />
        </Oauths>
      </OauthBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 110px;
  margin-bottom: 70px;
`;

const InputBox = styled.div`
  width: 320px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  border: 2px solid ${theme.GRN1};
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.BLK};
`;

const Button = styled.button`
  width: 320px;
  height: 60px;
  margin-top: 60px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.WHT};
  background-color: ${theme.GRN1};
`;

const OauthBox = styled.div`
  margin-top: 120px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.GRY2};
`;

const Oauths = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Oauth = styled.img`
  width: 50px;
`;
