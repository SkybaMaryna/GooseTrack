import { mainTextColor } from 'redux/Theme/Theme';
import styled from 'styled-components';

export const TitleColumn = styled.div`
  width: 111px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  background-color: transparent;
  color: ${mainTextColor};
  margin: 25px 0px 35px 25px;
`;

export const ColumnHeadWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;
