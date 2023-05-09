import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import { StyledForm, StyledFormInsight, StyledTitle, StyledLabel, StyledInput , StyledButton, StyledError } from './LoginFormStyled';
import { FiLogIn } from 'react-icons/fi';


const LoginForm = () => {
  const dispatch = useDispatch()
  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('It is not email').required('Required'),
        password: Yup.string().required('This is an error email'),
      })}
      onSubmit={values => {
        console.log(values);
        dispatch(loginThunk(values))
      }}
    >
      {() => (
        <StyledFormInsight>
          <StyledTitle>Log In</StyledTitle>
          <StyledLabel>Email</StyledLabel>
          <StyledInput  type="email" name="email" placeholder="Your e-mail..."/>
          <StyledError name="email" component="div" />
          <StyledLabel>Password</StyledLabel>
          <StyledInput  type="password" name="password" placeholder="......."/>
          <StyledError name="password" component="div" />
          <StyledButton type="submit">Log In  <FiLogIn /></StyledButton>
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};

export default LoginForm;
