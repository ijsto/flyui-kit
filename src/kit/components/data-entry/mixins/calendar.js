import { css } from 'styled-components';

export const calendarStyles = ({ theme }) => css`
  .SingleDatePicker,
  .SingleDatePickerInput,
  .DateInput,
  .DateRangePicker {
    width: 100%;
  }

  .SingleDatePickerInput {
    background: var(--input-background);
    border-color: var(--border-input-color, #dadada);
    border-radius: var(--radius-input, 4px);
    overflow: hidden;
  }
  .SingleDatePicker_picker {
    margin-top: -12px;
  }

  .DateInput_input {
    font-size: var(--fly-font-size-input, 14px);
    line-height: 1;
    text-align: center;
  }
  .DateInput_input__focused {
    border-bottom: ${`2px solid ${theme.colors.primary}`};
  }
  .CalendarDay__default:focus-visible {
    background: ${theme.colors.primaryShade[0]};
  }

  .DateInput_fang {
    top: 37px;
  }
  // Will edit everything selected including everything between a range of dates
  .CalendarDay__default {
    border: 0;
    border-radius: ${theme.radii[2]}px;
  }
  .CalendarDay__selected_span {
    color: white; //text
  }

  // Will edit selected date or the endpoints of a range of dates
  .CalendarDay__selected {
    background: ${theme.colors.primary};
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
