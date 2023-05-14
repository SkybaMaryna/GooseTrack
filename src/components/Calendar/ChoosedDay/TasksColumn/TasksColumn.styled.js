import { calendarBackgroundColor} from 'redux/Theme/Theme';
import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 568px;
  background: ${calendarBackgroundColor};
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;