import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 16px;
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  width: 121px;
  height: 49px;
  color: var(--mainWhite);
  background-color: var(--mainBlue);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  &:hover {
    background-color: #2b78ef;
  }
`;
export const IconLogOut = styled.span`
  width: 18px;
  height: 18px;
  size: 18px;
  padding-top: 1px;
  margin-left: 7px;
`;
