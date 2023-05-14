import React from 'react';
import {
  IconWrapper,
  LinkWrapper,
  NavLinkStyled,
  NavSecondaryTitle,
  NavTitle,
  UserNavContainer,
} from './UserNav.styled';
import { BsCalendar, BsFillPersonCheckFill } from 'react-icons/bs';
import { closeSideBar } from 'redux/Modal/modalSlice';
import { useDispatch } from 'react-redux';

const date = new Date().toISOString().split('T')[0];
const UserNav = () => {
  const dispatch = useDispatch();
  const closeMobileMenu = () => dispatch(closeSideBar());
  return (
    <UserNavContainer>
      <NavTitle>User panel</NavTitle>
      <LinkWrapper>
        <NavLinkStyled to="account" onClick={closeMobileMenu}>
          <IconWrapper>
            <BsFillPersonCheckFill />
            <NavSecondaryTitle>My account</NavSecondaryTitle>
          </IconWrapper>
        </NavLinkStyled>
      </LinkWrapper>
      <LinkWrapper>
        <NavLinkStyled to={`/main/calendar/month/${date}`} onClick={closeMobileMenu}>
          <IconWrapper>
            <BsCalendar />
            <NavSecondaryTitle>Calendar</NavSecondaryTitle>
          </IconWrapper>
        </NavLinkStyled>
      </LinkWrapper>
    </UserNavContainer>
  );
};

export default UserNav;
