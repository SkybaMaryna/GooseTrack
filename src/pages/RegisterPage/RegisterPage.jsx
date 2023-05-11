import RegisterForm from "components/Register/RegisterForm/RegisterForm";
import { StyledDiv, StyledImg  } from "./RegisterPageStyled";
import { StyledNavLink } from "pages/LoginPage/LoginPageStyled";

const RegisterPage = () => {
  return (
    <StyledDiv>
        <StyledImg
        src={require("../../images/signUpPage/elements_desk@1x.png")}
        srcset="../../images/signUpPage/elements_desk@1x.png 1x, ../../images/signUpPage/elements_desk@2x.png 2x"
        alt="Goose"
      />
      <RegisterForm/>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </StyledDiv>
  );
};

export default RegisterPage;
