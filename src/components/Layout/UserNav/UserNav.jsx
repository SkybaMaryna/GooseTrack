import React from 'react';
import {
  AccountIcon,
  CalendarIcon,
  IconWrapper,
  LinkWrapper,
  NavLinkStyled,
  NavSecondaryTitleAcc,
  NavSecondaryTitleCal,
  NavTitle,
  UserNavContainer,
} from './UserNav.styled';
const date = new Date().toISOString().split('T')[0];
const UserNav = () => {
  return (
    <UserNavContainer>
      <NavTitle>User panel</NavTitle>
      <LinkWrapper>
        <NavLinkStyled to="account">
          <IconWrapper>
            <AccountIcon />
            <NavSecondaryTitleAcc>My account</NavSecondaryTitleAcc>
          </IconWrapper>
        </NavLinkStyled>
      </LinkWrapper>
      <LinkWrapper>
        <NavLinkStyled to={`/main/calendar/month/${date}`}>
          <IconWrapper>
            <CalendarIcon />
            <NavSecondaryTitleCal>Calendar</NavSecondaryTitleCal>
          </IconWrapper>
        </NavLinkStyled>
      </LinkWrapper>
    </UserNavContainer>
  );
};

export default UserNav;
