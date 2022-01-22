import React from 'react';

import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';

import Box from '../layout/Box';
import { calendarStyles } from './mixins/calendar';

const StyleSingleDateWrapper = styled(Box)`
  ${calendarStyles};
`;

const DatePicker = props => (
  <StyleSingleDateWrapper>
    <StyleSingleDateWrapper>
      <SingleDatePicker {...props} />
    </StyleSingleDateWrapper>
  </StyleSingleDateWrapper>
);
export default DatePicker;
