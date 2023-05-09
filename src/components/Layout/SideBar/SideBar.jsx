import UserNav from '../UserNav/UserNav';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/Auth/authOperations';

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <UserNav />
      <LogoutBtn onClick={() => dispatch(logoutThunk())} />
    </div>
  );
};

export default SideBar;
