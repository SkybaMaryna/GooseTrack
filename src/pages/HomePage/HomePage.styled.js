import styled from 'styled-components';

export const Herosection = styled.section`
  /* width: 100%; */
  background-color: var(--mainBlue);
  margin-top: 0;
  margin-bottom: 64px;
  padding-top: 232px;
  padding-bottom: 88px;
  @media screen and (min-width: 768px) {
    padding-top: 320px;
    padding-bottom: 320px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 187px;
    padding-bottom: 200px;
  }
`;
export const HeroGooseImg = styled.img`
  margin: 0 auto 32px auto;
  width: 142px;
  height: 142px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;
export const HeroTitle = styled.div` 
  width: 219px;
  font-family: 'Coolvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 1.09;
  color: var(--mainWhite);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 596px;
    font-size: 120px;
    line-height: 1.5;
    margin-bottom: 40px;
    /* margin-left:88px; */
  }
`;
export const SpanOO = styled.span`
  font-family: 'Coolvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 44px;
  line-height: 1.09;
  color: var(--mainWhite);
  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.5;
  }
`;

export const MainInfoBox = styled.div`
  width: 335px;
  height: 799px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 1088px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1107px;
    height: 700px;
    justify-content: space-between;
    align-items: center;
    &:nth-child(2) {
    flex-direction: row-reverse;
    margin-right: 77px;
  }  }
`;
export const InfoBox = styled.div`
  width: 335px;
  height: 302px;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 40px; */
  @media screen and (min-width: 768px) {
    width: 275px;
    height: 340px;
    /* margin-bottom: 64px; */
  }
  /* @media screen and (min-width: 1440px) {
    margin-bottom: 180px;
  } */
`;
export const MainNumber = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 0.8;
  letter-spacing: -4px;
  color: var(--mainBlue);
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    font-size: 104px;
    line-height: 1.04;
    margin-bottom: 20px;
  }
`;
export const MainTitle = styled.div`
  width: 214px;
  height: 56px;
  background: var(--mainLightblue);
  padding: 8px 18px;
  border-radius: 44px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  color: var(--mainBlue);
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
    padding: 6px 18px;
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const MainSubTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  color: var(--mainBlack);
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 24px;
  }
`;
export const MainText = styled.p`
  width: 335px;
  height: 90px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--mainBlack);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 275px;
    margin-bottom: 48px;
  }
`;
