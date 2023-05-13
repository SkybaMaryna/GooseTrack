import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsCalendar, BsFillPersonCheckFill } from 'react-icons/bs';
import { addTaskBtnColor, addTaskBtnHover, elementTextColor } from 'redux/Theme/Theme';

export const AccountIcon = styled(BsFillPersonCheckFill)`
color: ${elementTextColor};
`

export const CalendarIcon = styled(BsCalendar)`
color:${elementTextColor};
`

export const UserNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const LinkWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const NavLinkStyled = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;  
  &.active {
    background-color: ${addTaskBtnColor};
    color: #3e85f3;
  }
  &:focus {
    color: #3e85f3;
    background-color: ${addTaskBtnColor};
  }

  &:hover {
    color: #3e85f3;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
`;

export const NavSecondaryTitleAcc = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: ${elementTextColor};
  transition: all ease-in-out 400ms;
  :hover {
    color: ${addTaskBtnHover};
  }
 
`;
export const NavSecondaryTitleCal = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: ${elementTextColor};
  transition: all ease-in-out 400ms;
`;

export const NavTitle = styled.h2`
  font-size: 14px;
  line-height: 17px;
  color: #7e7d82;
  margin-bottom: 18px;
`;
