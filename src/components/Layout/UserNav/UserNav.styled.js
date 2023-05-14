import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { addTaskBtnColor, elementTextColor, elementTextHoverColor} from 'redux/Theme/Theme';

export const UserNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;`
;

export const LinkWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;`
;

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
  color: ${elementTextColor};
  transition: all ease-in-out 400ms;
  &.active {
    background-color: ${addTaskBtnColor};
    color: ${elementTextHoverColor};
    &:hover {
      color: ${elementTextHoverColor};
    }
  }
  :focus {
    color: ${elementTextHoverColor};
    background-color: ${addTaskBtnColor};
  }

  :hover {
    color: var(--mainBlue);
  }`
;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;`
;

export const NavSecondaryTitle = styled.p`
  font-size: 16px;
  line-height: 19px;`
;

export const NavTitle = styled.h2`
  font-size: 14px;
  line-height: 17px;
  color: #7e7d82;
  margin-bottom: 18px;`
;