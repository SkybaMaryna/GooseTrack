import styled from 'styled-components';

export const ReviewCard = styled.div`
  width: 335px;
  height: 194px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid var(--scrollBar);
  padding: 24px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 580px;
    height: 187px;
    padding: 32px;
  }
`;
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--textGrey);
  margin-right: 18px;
`;
export const ReviewAuthor = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: var(--mainBlack);
`;
export const RangeStars = styled.div`
  width: 110px;
  height: 14px;
  margin-top: 11px;
`;
export const ReviewText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  margin: 0 auto 36px auto;
  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;
export const AuthorBox = styled.div`
  display: flex;
`;
export const ButtonSwiperBox = styled.div`
  width: 125px;
  height: 50px;
  margin: 8px auto 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 147px;
    height: 61px;
    margin-top: 18px;
  }
`;
export const SwiperButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 16px;
  width: 50px;
  height: 46px;
  cursor: pointer;
  transition: all ease-in-out 400ms;
  &:hover {
    background: var(--mainLightblue);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  @media screen and (min-width: 768px) {
    width: 61px;
    height: 48px;
  }
`;

