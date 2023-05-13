import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  color: #84828a;
  transition: all ease-in-out 400ms;
  
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
`;

export const NavSecondaryTitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  &.active {
    background-color: #e3f3ff;
    color: #3e85f3;
  }
  :focus {
    color: #3e85f3;
    background-color: #e3f3ff;
  }

  :hover {
    color: #3e85f3;
  }
`;

export const NavTitle = styled.h2`
  font-size: 14px;
  line-height: 17px;
  color: #7e7d82;
  margin-bottom: 18px;
`;
