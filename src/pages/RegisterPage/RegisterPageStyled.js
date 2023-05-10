import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100vh;
  background-color: #dcebf7;
  position: relative;
  padding-top: 576px;
  text-align: center;
`;

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
