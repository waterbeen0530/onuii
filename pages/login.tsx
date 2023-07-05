import Main from "@/components/login/main";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Login() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-color: ${theme.WHT};
`;
