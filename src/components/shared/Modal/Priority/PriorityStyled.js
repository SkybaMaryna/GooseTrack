import { calendarHoverColor } from 'redux/Theme/Theme';
import styled from 'styled-components';

export const PriorityWraper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const PriorityItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const PriorityCircle = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.color === 'blue'
      ? '#72C2F8'
      : props.color === 'orange'
      ? '#F3B249'
      : props.color === 'red'
      ? '#EA3D65'
      : 'white'};
  border: 4px;
  border: solid white 1px;
`;
export const ActiveCircle = styled.div`
  position: absolute;

  top: 52%;
  left: 49%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  opacity: 0.6;
  border: 3px solid
    ${props =>
      props.color === 'blue'
        ? '#72C2F8'
        : props.color === 'orange'
        ? '#F3B249'
        : props.color === 'red'
        ? '#EA3D65'
        : 'white'};
`;

export const StyledPar = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${calendarHoverColor};
  cursor: pointer;
`;
