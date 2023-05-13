import LoginForm from 'components/Login/LoginForm/LoginForm';
import { StyledDiv, StyledLoginFormWrapper, StyledNavLink } from './LoginPageStyled';
import { StyledImg } from './LoginPageStyled';


const LoginPage = () => {
  return (
    <StyledDiv>
      <StyledLoginFormWrapper>
      <LoginForm />
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      </StyledLoginFormWrapper>
      <StyledImg
        src={require('../../images/logInPage/elements_desk@1x.png')}
        srcset="../../images/logInPage/elements_desk@1x.png 1x, ../../images/logInPage/elements_desk@2x.png 2x"
        alt="Goose"
      />
      
    </StyledDiv>
  );
};

export default LoginPage;
