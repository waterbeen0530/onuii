import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <Logo src="./imgs/onBoarding/logo.png" />
        <Rice src="./imgs/onBoarding/rice.png" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.GRN1};
  overflow-y: hidden;
`;

const Wrapper = styled.div`
  margin-bottom: 190px;
  gap: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 110px;
`;

const Rice = styled.img`
  width: 180px;
`;
