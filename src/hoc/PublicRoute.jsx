import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/calendar/month/:currentDate" /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
