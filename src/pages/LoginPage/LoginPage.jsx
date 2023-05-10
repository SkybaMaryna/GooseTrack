import LoginForm from 'components/Login/LoginForm/LoginForm';
import { StyledDiv } from './LoginPageStyled';
import { StyledImg } from './LoginPageStyled';
import AuthNavigate from 'components/shared/AuthNavigate/AuthNavigate';

const LoginPage = () => {
  return (
    <StyledDiv>
      <LoginForm />
      <StyledImg
        src={require('../../images/logInPage/elements_desk@1x.png')}
        srcset="../../images/logInPage/elements_desk@1x.png 1x, ../../images/logInPage/elements_desk@2x.png 2x"
        alt="Goose"
      />
      <AuthNavigate />
    </StyledDiv>
  );
};

export default LoginPage;
