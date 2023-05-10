import { selectIsIsLoading, selectUser } from 'redux/Auth/authSelectors';
import { Avatar, AvatarImg, AvatarLetter, Name, Link } from './UserInfo.styled';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const userInfo = useSelector(selectUser);
  const isLoading = useSelector(selectIsIsLoading);

  const name = userInfo?.name || 'Name';
  const avatar = userInfo?.userImgUrl;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  return (
    <Link to="/main/account">
      <Name>{name}</Name>
      <Avatar>
        {isLoading ? (
          <AvatarLetter>{firstLetter}</AvatarLetter>
        ) : !avatar ? (
          <AvatarLetter>{firstLetter}</AvatarLetter>
        ) : (
          <AvatarImg src={avatar} alt="Avatar" />
        )}
      </Avatar>
    </Link>
  );
};

export default UserInfo;
