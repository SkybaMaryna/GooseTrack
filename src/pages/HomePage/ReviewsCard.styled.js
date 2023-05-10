import styled from 'styled-components';

export const ReviewCard = styled.div`
width: 335px;
height: 194px;
display: flex;
/* flex-direction: row;
align-items: flex-start; */
flex-direction: column;
/* align-items: center; */
justify-content: flex-start;
padding: 0px;
gap: 24px;
border-radius: 8px;
border: 1px solid var(--textGrey);
padding: 24px;
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
  /* margin: 0 auto 40px auto; */
`;
export const RangeStars = styled.div`
width: 110px;
height: 14px;
margin-top: 13px;
`;
export const ReviewText = styled.p`
 font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  margin: 0 auto 40px auto;
  @media screen and (min-width: 768px) {
   margin-left: 68px;
  }
`;
export const AuthorBox = styled.div`
/* width: 110px;
height: 14px; */
display: flex;
`;