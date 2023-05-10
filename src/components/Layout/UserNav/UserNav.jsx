import React from 'react';
import { IconWrapper, LinkWrapper, NavLinkStyled, NavSecondaryTitle, NavTitle, UserNavContainer } from './UserNav.styled';
import { BsCalendar, BsFillPersonCheckFill } from 'react-icons/bs';


const UserNav = () => {
    return (
        <UserNavContainer>
        <NavTitle>User panel</NavTitle>
            <LinkWrapper>
                <NavLinkStyled to="/account">
                    <IconWrapper>
                    <BsFillPersonCheckFill/>
                    <NavSecondaryTitle>My account</NavSecondaryTitle>
                    </IconWrapper>
                </NavLinkStyled>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinkStyled to="/calendar">
                    <IconWrapper>
                    <BsCalendar/>
                    <NavSecondaryTitle>Calendar</NavSecondaryTitle>
                    </IconWrapper>
                </NavLinkStyled>
            </LinkWrapper>
        </UserNavContainer>
    );
};



export default UserNav;
