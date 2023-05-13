import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100vh;
  background-color: #dcebf7;
  position: relative;
  padding-top: 576px;
  text-align: center;
  @media screen and (min-width: 768px){
    padding-top: 630px; 
    }
`;

export const StyledRegisterFormWrapper = styled.div`
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 min-width: 335px;
 text-align: center;

 @media screen and (min-width: 768px){
    width: 480px;
    }

`

export const StyledImg = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 400px;
    height: 416px;
    position: absolute;
    left: 49px;
    bottom: 0;
  }
`;
