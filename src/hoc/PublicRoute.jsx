import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import moment from 'moment';
export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentDay = moment().format('YYYY-MM-DD');

  return isLoggedIn ? (
    <Navigate to={`/main/calendar/month/${currentDay}`} />
  ) : (
    children
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
