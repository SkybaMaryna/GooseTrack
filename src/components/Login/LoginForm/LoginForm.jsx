import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';
import css from './LoginForm.module.css'

const LoginForm = () => {
  const dispatch = useDispatch()
  return (
    <Formik className={css.form}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('It is not email').required('Required'),
        password: Yup.string().required('Please provide a valid password'),
      })}
      onSubmit={values => {
        console.log(values);
        dispatch(loginThunk(values))
      }}
    >
      {() => (
        <Form>
          <h2>Log In</h2>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Log In</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
