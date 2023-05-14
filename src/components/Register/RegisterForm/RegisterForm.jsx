import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledIconChecked,
  StyledIconError,
  StyledInput,
  StyledInputWrap,
  StyledLabel,
  StyledTitle,
} from './RegisterFormStyled';
import { FiLogIn } from 'react-icons/fi';

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <StyledForm
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Length must be less then 15')
          .required('Required'),
        email: Yup.string().email('It is not email').required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      })}
      onSubmit={values => {
        dispatch(registerThunk(values));
      }}
    >
      {({ errors, touched }) => (
        <StyledFormInsight>
          <StyledTitle>Sign Up</StyledTitle>
          <StyledLabel>Name</StyledLabel>
          <StyledInputWrap>
            <StyledInput
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            {errors.name && touched.name && <StyledIconError color="red" />}
            {touched.name && !errors.name && (
              <StyledIconChecked color="green" />
            )}
          </StyledInputWrap>
          <StyledError name="name" component="div" />
          <StyledLabel>Email</StyledLabel>
          <StyledInputWrap>
            <StyledInput type="email" name="email" placeholder="Email" />
            {errors.email && touched.email && <StyledIconError color="red" />}
            {touched.email && !errors.email && (
              <StyledIconChecked color="green" />
            )}
          </StyledInputWrap>
          <StyledError name="email" component="div" />
          <StyledLabel>Password</StyledLabel>
          <StyledInputWrap>
            <StyledInput type="password" name="password" placeholder="......" />
            {errors.password && touched.password && (
              <StyledIconError color="red" />
            )}
            {touched.password && !errors.password && (
              <StyledIconChecked color="green" />
            )}
          </StyledInputWrap>
          <StyledError name="password" component="div" />
          <StyledButton type="submit">
            Sign Up <FiLogIn />
          </StyledButton>
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};

export default RegisterForm;
