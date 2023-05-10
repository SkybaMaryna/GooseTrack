import { selectIsIsLoading, selectUser } from 'redux/Auth/authSelectors';
import { Avatar, AvatarImg, AvatarLetter, Name, Link } from './UserInfo.styled';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const userInfo = useSelector(selectUser);
  const isLoading = useSelector(selectIsIsLoading);

  const name = userInfo.user?.name || 'Name';

  return <div>UserInfo</div>;
};

export default UserInfo;
