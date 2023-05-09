import { FiLogOut } from 'react-icons/fi';
import { Button, IconLogOut } from './LogoutBtn.styled';
import { logoutThunk } from 'redux/Auth/authOperations';
import { useDispatch } from 'react-redux';

const ButtonLogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <Button onClick={handleLogout}>
      Log out
      <IconLogOut>
        <FiLogOut />
      </IconLogOut>
    </Button>
  );
};

export default ButtonLogOut;
