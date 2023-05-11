import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Svg = styled.svg`
  display: flex;
  align-items: center;
  width: 19px;
  height: 19px;
  margin-right: 14px;
  fill: var(--mainBlue);
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
