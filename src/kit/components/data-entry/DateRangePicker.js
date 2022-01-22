import React from 'react';

import {
  DateRangePicker as DateRangePickerComponent,
  // SingleDatePicker,
  // DayPickerRangeController,
} from 'react-dates';
import styled from 'styled-components';

import Box from '../layout/Box';

const StyleWrapper = styled(Box)`
  .DateInput_input {
    font-size: var(--fly-font-size-input, 14px);
    line-height: 1;
    text-align: center;
  }
  .DateInput_input__focused {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  }
  .CalendarDay__default:focus-visible {
    background: ${({ theme }) => theme.colors.primaryShade[0]};
  }

  // Will edit everything selected including everything between a range of dates
  .CalendarDay__default {
    border: 0;
    border-radius: ${({ theme }) => theme.radii[2]}px;
  }
  .CalendarDay__selected_span {
    color: white; //text
    border: 1px solid $light-red; //default styles include a border
  }

  // Will edit selected date or the endpoints of a range of dates
  .CalendarDay__selected {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  // Will edit when hovered over. _span style also has this property
  .CalendarDay__selected:hover {
    background: orange;
    color: white;
  }

  // Will edit when the second date (end date) in a range of dates
  // is not yet selected. Edits the dates between your mouse and said date
  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
  }
`;
// const StyleSingleDateWrapper = styled(Box)`
//   .SingleDatePicker,
//   .SingleDatePickerInput,
//   .DateInput,
//   .DateRangePicker {
//     width: 100%;
//   }

//   .SingleDatePickerInput {
//     background: var(--input-background);
//     border-color: var(--border-input-color, #dadada);
//     border-radius: var(--radius-input, 4px);
//     overflow: hidden;
//   }
//   .SingleDatePicker_picker {
//     margin-top: -12px;
//   }

//   .DateInput_input {
//     font-size: var(--fly-font-size-input, 14px);
//     line-height: 1;
//     text-align: center;
//   }
//   .DateInput_input__focused {
//     border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
//   }
//   .CalendarDay__default:focus-visible {
//     background: ${({ theme }) => theme.colors.primaryShade[0]};
//   }

//   .DateInput_fang {
//     top: 37px;
//   }
//   // Will edit everything selected including everything between a range of dates
//   .CalendarDay__default {
//     border: 0;
//     border-radius: ${({ theme }) => theme.radii[2]}px;
//   }
//   .CalendarDay__selected_span {
//     color: white; //text
//     border: 1px solid $light-red; //default styles include a border
//   }

//   // Will edit selected date or the endpoints of a range of dates
//   .CalendarDay__selected {
//     background: ${({ theme }) => theme.colors.primary};
//     color: white;
//   }

//   // Will edit when hovered over. _span style also has this property
//   .CalendarDay__selected:hover {
//     background: orange;
//     color: white;
//   }

//   // Will edit when the second date (end date) in a range of dates
//   // is not yet selected. Edits the dates between your mouse and said date
//   .CalendarDay__hovered_span:hover,
//   .CalendarDay__hovered_span {
//     background: brown;
//   }
// `;

const DateRangePicker = props => (
  // const [endDate, setEndDate] = useState(null);
  // // const [focused, setFocused] = useState(null);
  // const [focusedInput, setFocusedInput] = useState(null);
  // const [startDate, setStartDate] = useState(null);

  <StyleWrapper>
    {/* <StyleSingleDateWrapper><SingleDatePicker
        style={{ width: '100%' }}
        numberOfMonths={1}
        // navNext={<div>Next</div>}
        // navPrev={<div>Prev</div>}
        date={startDate} // momentPropTypes.momentObj or null
        placeholder="Pick Date"
        displayFormat="dddd, MMM Do"
        showClearDate
        onDateChange={date => {
          router.push({
            query: { startDate: date.format('YYYY-MM-DD') },
          });
          return setStartDate(date);
        }} // PropTypes.func.isRequired
        focused={focused} // PropTypes.bool
        // isDayHighlighted={day => day.isAfter(moment())}
        onFocusChange={({ focused: f }) => setFocused(f)} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        hideKeyboardShortcutsPanel
      /></StyleSingleDateWrapper> */}
    <DateRangePickerComponent
      {...props}
      // startDate={startDate} // momentPropTypes.momentObj or null,
      // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      // endDate={endDate} // momentPropTypes.momentObj or null,
      // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      // isDayHighlighted={day => day.isAfter(moment())}
      // // isDayBlocked={day => true}
      // onDatesChange={({ startDate: sDate, endDate: eDate }) => {
      //   setStartDate(sDate);
      //   return setEndDate(eDate);
      // }} // PropTypes.func.isRequired,
      // focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      // onFocusChange={fi => setFocusedInput(fi)} // PropTypes.func.isRequired,
      // onNextMonthClick={() =>
      //   console.log('ExploreDoctors :: onNextMonthClick')
      // }
      // hideKeyboardShortcutsPanel
    />
  </StyleWrapper>
);
export default DateRangePicker;
