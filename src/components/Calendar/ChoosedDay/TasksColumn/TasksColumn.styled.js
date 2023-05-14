import { calendarBackgroundColor} from 'redux/Theme/Theme';
import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 568px;
  background: ${calendarBackgroundColor};
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  width: 335px;

@media screen and (min-width: 768px){
    width: 344px;
}

`;