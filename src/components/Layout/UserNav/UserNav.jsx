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
const date = new Date().toISOString().split('T')[0];
const UserNav = () => {
  return (
    <UserNavContainer>
      <NavTitle>User panel</NavTitle>
      <LinkWrapper>
        <NavLinkStyled to="account">
          <IconWrapper>
            <BsFillPersonCheckFill />
            <NavSecondaryTitle>My account</NavSecondaryTitle>
          </IconWrapper>
        </NavLinkStyled>
      </LinkWrapper>
      <LinkWrapper>
        <NavLinkStyled to={`/main/calendar/month/${date}`}>
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
