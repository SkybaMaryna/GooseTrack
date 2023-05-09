import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledFormInsight,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledError,
  StyledInputWrap,
  StyledIconError,
  StyledIconChecked,
} from './LoginFormStyled';
import { FiLogIn } from 'react-icons/fi';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';


const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)
 
  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string().required('This password is not valid'),
      })}
      onSubmit={values => {
        console.log(values);
        dispatch(loginThunk(values));
        if(!isLoggedIn){}
      }}
    >
      {() => (
        <StyledFormInsight>
          <StyledTitle>Log In</StyledTitle>
          <StyledLabel>Email</StyledLabel>
          <StyledInputWrap>
          <StyledInput type="email" name="email" placeholder="Your e-mail..." />
          <StyledIconError  color='red' display='none'/>
          </StyledInputWrap>
          <StyledError name="email" component="div"/>
          <StyledLabel>Password</StyledLabel>
          <StyledInputWrap>
          <StyledInput type="password" name="password" placeholder="......." />
          <StyledIconChecked color='green'/>
          </StyledInputWrap>
          <StyledError name="password" component="div" />
          <StyledButton type="submit">Log In <FiLogIn />
          </StyledButton>
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};

export default LoginForm;
