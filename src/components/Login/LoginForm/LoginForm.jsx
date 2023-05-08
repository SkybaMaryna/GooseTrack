import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  return (
    <Formik
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
      }}
    >
      {() => (
        <Form>
          <h2>Loge In</h2>
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
