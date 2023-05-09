import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import { StyledForm, StyledFormInsight, StyledTitle, StyledLabel, StyledInput , StyledButton, StyledError } from './LoginFormStyled';
import { FiLogIn } from 'react-icons/fi';
// import { useNavigate } from 'react-router';


const LoginForm = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('This is an error email').required('Required'),
        password: Yup.string().required('This password is not valid'),
      })}
      onSubmit={values => {
        console.log(values);
        dispatch(loginThunk(values))
        // navigate('/calendar/month/:currentDate')
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
