import styled from 'styled-components';

export const NotFoundBox = styled.div`
  width: 335px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 40px;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid var(--textGrey);
  background: var(--mainLightblue);
  @media screen and (min-width: 768px) {
    width: 580px;
    padding: 32px;
  }
`;
export const MainSubTitle = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  color: var(--mainBlack);
  margin: 14px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin: 24px;
  }
`;
export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.25;
  color: var(--mainBlack);
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.1;
    margin: 14px;
  }
`;

