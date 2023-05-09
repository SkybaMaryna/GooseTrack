import { FiLogOut } from 'react-icons/fi';
import { Button, IconLogOut } from './LogoutBtn.styled';

const ButtonLogOut = () => {
  return (
    <Button>
      Log out
      <IconLogOut>
        <FiLogOut />
      </IconLogOut>
    </Button>
  );
};

export default ButtonLogOut;
