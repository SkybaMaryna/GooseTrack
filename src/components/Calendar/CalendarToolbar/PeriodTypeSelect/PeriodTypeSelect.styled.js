import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
export const Item = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
`;
export const StyledNavLink = styled(NavLink)`
  color: #3E85F3;

  background-color:#E3F3FF;

  &.active {
    background-color: #CAE8FF;
  }
  &.month {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }
  &.day {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;


// import styled from 'styled-components';

// export const PeriodTypeSelectWrap = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

// export const PeriodTypeSelectButtonMonth = styled.button`
//   padding: 8px 16px;
//   border: none;
//   border-right: 1px solid rgba(62, 133, 243, 0.2);
//   border-radius: 8px 0px 0px 8px;
//   font-weight: 500;
//   font-size: 16px;
//     line-height: 1.12;
//   color: #3e85f3;
//   background-color: #3E85F3;
//   text-align: center;
//   cursor: pointer;
//   :hover {
//     background-color: rgb(189 222 247);
//   }

// `;

// export const PeriodTypeSelectButtonDay = styled.button`
//   padding: 8px 26px;
//   border: none;
//   border-radius: 0px 8px 8px 0px;
//   font-weight: 500;
//   font-size: 16px;
//     line-height: 1.12;
//   color: #3e85f3;
//   background-color: #3E85F3;
//   text-align: center;
//   cursor: pointer;
//   :hover {
//     background-color: rgb(189 222 247);
//   }

// `;
