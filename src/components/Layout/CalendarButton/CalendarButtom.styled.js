import styled from 'styled-components';

export const Button = styled.button`
background: var(--mainWhite);
  padding: 8px 18px;
  border-radius: 16px;
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.25;
  color: var(--mainBlue);
  font-weight: 700;
  border-color: var(--mainBlue);
  margin: 0 auto;
  width: 150px;
  cursor: pointer;
  &:hover {
     background: var(--mainLightblue);
     box-shadow: 4px 2px 10px rgba(136, 165, 191, 0.8);
  }
`;