import RegisterForm from "components/Register/RegisterForm/RegisterForm";
import { StyledDiv, StyledImg  } from "./RegisterPageStyled";

const RegisterPage = () => {
  return (
    <StyledDiv>
        <StyledImg
        src={require("../../images/signUpPage/elements_desk@1x.png")}
        srcset="../../images/signUpPage/elements_desk@1x.png 1x, ../../images/signUpPage/elements_desk@2x.png 2x"
        alt="Goose"
      />
      <RegisterForm/>
    </StyledDiv>
  );
};

export default RegisterPage;
