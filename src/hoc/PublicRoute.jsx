import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const date = new Date().toISOString().split('T')[0];

  return isLoggedIn ? (
    <Navigate to={`/main/calendar/month/${date}`} />
  ) : (
    children
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
