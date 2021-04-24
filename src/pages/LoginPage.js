import styled from "styled-components";

const LoginWrapper = styled.div`
  padding: 10px;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(10px);

  & > * {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 10px 0;
  border: none;
  border-radius: 20px;
  background-color: royalblue;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: goldenrod;
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <label>
        Login: <Input type="text" name="" id="login" />
      </label>
      <br />
      <label>
        Password: <Input type="password" name="" id="password" />
      </label>
      <br />
      <Button>Sign in</Button>
    </LoginWrapper>
  );
};

export default Login;
