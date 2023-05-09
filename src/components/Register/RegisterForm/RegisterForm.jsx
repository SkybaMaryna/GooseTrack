import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/Auth/authOperations';
import * as Yup from 'yup';

const RegisterForm = () => {
  const dispatch = useDispatch()

  return (
    <Formik
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
        <Form>
          <h2>Sign Up</h2>
          <label>Name</label>
					<Field type='text' name='name' />
					<ErrorMessage name='name' component='div' />
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};


export default RegisterForm;
