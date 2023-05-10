import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import { StyledButton, StyledError, StyledForm, StyledFormInsight, StyledInput, StyledLabel, StyledTitle } from './RegisterFormStyled';
import { FiLogIn } from 'react-icons/fi';


const RegisterForm = () => {
  const dispatch = useDispatch()


  return (
    <StyledForm
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
					.max(10, 'Length must be less then 10')
					.required('Required'),
        email: Yup.string().email('It is not email').required('Required'),
        password: Yup.string().required('Please provide a valid password'),
      })}
      onSubmit={values => {
        console.log(values)
        dispatch(registerThunk(values)); 
      }}
    >
      {() => (
        <StyledFormInsight>
          <StyledTitle>Sign Up</StyledTitle>
          <StyledLabel>Name</StyledLabel>
					<StyledInput type='text' name='name' placeholder="Enter your name"/>
					<StyledError name='name' component='div' />
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="email" name="email" placeholder="Email"/>
          <StyledError name="email" component="div" />
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" name="password" placeholder="......" />
          <StyledError name="password" component="div" />
          <StyledButton type="submit">Sign Up   <FiLogIn /></StyledButton>
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};


export default RegisterForm;
