import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
